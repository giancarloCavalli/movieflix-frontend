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

export const isAuthenticated = () => {
  const authData = getAuthData();
  return (authData && authData?.expires_in > (Date.now() / 1000)) ? true : false;
}