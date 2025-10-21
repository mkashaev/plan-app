export type LoginDto = {
  username: string;
  password: string;
};

export type UserData = {
  id: string;
  username: string;
  email: string;
};

export type AuthData = {
  data: UserData;
  authToken: string;
};
