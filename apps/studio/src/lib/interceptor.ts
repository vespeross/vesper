import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

instance.interceptors.request.use(
  (config) => {
    console.log("Request was made with", config);
    return config;
  },
  (error) => {
    console.log("Request error", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log("Response was received", response);
    return response;
  },
  (error) => {
    console.log("Response error", error);
    return Promise.reject(error);
  }
);

export { instance as interceptor };
