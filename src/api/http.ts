import Axios from "axios";
const { PROD, VITE_API_URL_PROD, VITE_API_URL_DEV } = import.meta.env;

const axios = Axios.create({
  baseURL: PROD ? VITE_API_URL_PROD : VITE_API_URL_DEV,
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
