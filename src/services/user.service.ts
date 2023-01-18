import authHeader from "./auth-header";
import { API_URL } from "../helpers/constants";

const url = `${API_URL}/api/test/`;

class UserService {
  getPublicContent() {
    return fetch(url + "all", { method: "GET" });
  }

  getUserBoard() {
    return fetch(url + "user", { method: "GET", headers: authHeader() });
  }

  getModeratorBoard() {
    return fetch(url + "mod", { method: "GET", headers: authHeader() });
  }

  getAdminBoard() {
    return fetch(url + "admin", { method: "GET", headers: authHeader() });
  }
}

const userService = new UserService();

export default userService;
