import { useState } from "react";

const sessionToken = "secReactToken";

type UserToken = {
  token: string;
};

export default function useToken() {
  const getToken = (): string => {
    const tokenString = localStorage.getItem(sessionToken)!;
    const userToken: UserToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: UserToken): void => {
    localStorage.setItem(sessionToken, JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}

/**
 * sessionStorage: guarda informações durante uma única sessão
 * localStorage: guarda informações mesmo após o fim da sessão E entre abas
 */
