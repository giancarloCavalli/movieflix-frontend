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