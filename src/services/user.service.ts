import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

export default class UserService {
  getPublicContent() {
    return fetch(API_URL + "all", { method: "GET" });
  }

  getUserBoard() {
    return fetch(API_URL + "user", { method: "GET", headers: authHeader() });
  }

  getModeratorBoard() {
    return fetch(API_URL + "mod", { method: "GET", headers: authHeader() });
  }

  getAdminBoard() {
    return fetch(API_URL + "admin", { method: "GET", headers: authHeader() });
  }
}
