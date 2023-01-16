type Credentials = {
  username: string | undefined;
  password: string | undefined;
};

const url = "http://localhost:8080";

export async function LoginUser(credentials: Credentials) {
  return fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
