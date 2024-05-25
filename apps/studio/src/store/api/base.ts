import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { actions } from "../slices/auth";
import { RootState } from "@/store";

const baseUrl = `http://localhost:8000/api/v1`;

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.access_token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      const refresh_token = document.cookie
        .split("; ")
        .map((cookie) => cookie.split("="))
        .find(([key]) => key === "refresh_token")?.[1];
      try {
        const refreshResult = (await baseQuery(
          {
            url: "auth/refresh",
            headers: {
              authorization: `Bearer ${refresh_token}`,
            },
          },
          api,
          extraOptions
        )) as { data: { body: { accessToken: string } } };
        if (refreshResult.data) {
          const state = api.getState() as RootState;
          const user = state.auth.user;
          api.dispatch(
            actions.addUser({
              user: user!,
              access_token: refreshResult.data.body.accessToken,
            })
          );
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(actions.removeUser());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
