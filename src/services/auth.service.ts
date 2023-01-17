import { USER_LOCALSTORAGE_KEY } from "../helpers/constants";

const API_URL = "http://localhost:8080/api/auth/";

export default class AuthService {
  async login(username: string, password: string) {
    const data = { username, password };

    return fetch(`${API_URL}/signin`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response: any) => {
      if (response.data.accessToken) {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  }

  async register(username: string, email: string, password: string) {
    const data = {
      username,
      email,
      password,
    };

    return fetch(API_URL + "signup", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response: any) => response.data);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY)!);
  }
}
