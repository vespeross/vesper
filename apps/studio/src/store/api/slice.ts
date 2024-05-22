import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/store";
// import { actions } from "@/store/slices/auth";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api/v1",
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

// type RefreshResponse = {
//   access_token: string;
// };

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  let result = await baseQuery(args, api, extraOptions);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // if (result.data.error === "Token is expired") {
  //   const refreshResult = (await baseQuery(
  //     "/auth/refresh",
  //     api,
  //     extraOptions
  //   )) as { data: RefreshResponse };
  //   if (refreshResult.data.access_token) {
  //     const state = api.getState() as RootState;
  //     const user = state.auth.user;
  //     api.dispatch(
  //       actions.addUser({
  //         access_token: refreshResult.data.access_token,
  //         user: user!,
  //       })
  //     );
  //     result = await baseQuery(args, api, extraOptions);
  //   } else {
  //     api.dispatch(actions.removeUser());
  //   }
  // }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});
