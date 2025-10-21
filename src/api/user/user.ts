import { AuthData, LoginDto } from './types';

export const login = async (_: LoginDto): Promise<AuthData> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MockUser);
    }, 500);
  });
};

const MockUser = {
  data: {
    id: '1',
    username: 'testuser',
    email: 'testuser@example.com',
  },
  authToken: 'mock-jwt-token',
};
