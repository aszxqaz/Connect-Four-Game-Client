import Axios from "axios";
import { configs } from "../config";

const axios = Axios.create({
  baseURL: configs.httpBaseUrl,
  withCredentials: true,
});

export const api = {
  async login(username: string) {
    return axios
      .post<{ user: { username: string } }>("/auth/login", {
        username,
      })
      .then((data) => data.data)
      .catch((err) => ({ error: err.message }));
  },
  async me() {
    return axios
      .get<{ user: { username: string } }>("/auth/me")
      .then((data) => data.data)
      .catch((err) => ({ error: err.message }));
  },
};
