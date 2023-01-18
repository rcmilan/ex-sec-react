import { USER_LOCALSTORAGE_KEY } from "../helpers/constants";
import { API_URL } from "../helpers/constants";

type Credentials = {
  username: string | undefined;
  password: string | undefined;
};

class AuthService {
  async login(credentials: Credentials) {
    return fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
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

    return fetch(`${API_URL}/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response: any) => response.data);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY)!);
  }
}

const authService = new AuthService();

export default authService;
