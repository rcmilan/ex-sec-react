import { USER_LOCALSTORAGE_KEY } from "../helpers/constants";

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY)!);

  const requestHeaders: HeadersInit = new Headers();

  if (user?.accessToken) {
    // for Node.js Express back-end
    requestHeaders.set("x-access-token", user.accessToken);

    // requestHeaders.set("Authorization", "Bearer " + user.accessToken);
  }

  return requestHeaders;
}
