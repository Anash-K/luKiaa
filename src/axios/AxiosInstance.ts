import { onlineManager } from "@tanstack/react-query";
import axios from "axios";
import store from "../redux/configureStore";

const Urls = {
  liveUrl: "https://demo/api/",
  localUrl: "http://192.168.1.126:8080/",
};

const AxiosInstance = axios.create({
  baseURL: Urls.liveUrl,
  headers: {
    Accept: "application/json",
    // "Content-Type": "multipart/form-data",
    "secret-key": "c2a7fecd-a1a1-43e0-86b9-3c7eb9a04ec1",
  },
});

AxiosInstance.interceptors.request.use((request) => {
  if (!onlineManager) {
    return Promise.reject(new Error("Internet connection is not available"));
  }

  const storeData = store.getState();
  if (storeData?.auth?.token) {
    request.headers.Authorization = `Bearer ${storeData.auth?.token}`;
  }

  return request;
});

AxiosInstance.interceptors.response.use(
  (response) => {    
    return response;
  },
  (error) => {
    const errorObj = JSON.parse(JSON.stringify(error?.response ?? error));

    if (errorObj.status == 401) {
    //   store.dispatch(logout());
    } else {
      throw errorObj;
    }
  }
);

export default AxiosInstance;
