import jwtDecode from "jwt-decode";
import { Token } from "typescript";
import { getAuthData } from "./storage";

export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

export type LoginData = {
  username: string,
  password: string
};

export type TokenData = {
  exp: number,
  user_name: string,
  authorities: Role[]
}

export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();
  return (tokenData && tokenData?.exp > (Date.now() / 1000)) ? true : false;
}

export const getTokenData = (): TokenData | undefined => {
  try {
    return jwtDecode(getAuthData().access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
}