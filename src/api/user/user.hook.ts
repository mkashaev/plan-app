import { useState } from 'react';
import { AuthData, LoginDto } from './types';
import { login } from './user';

export const useUser = () => {
  const [user, setUser] = useState<AuthData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState<Error | null>(null);

  const fetchUser = async (data: LoginDto) => {
    setIsLoading(true);
    try {
      const response = await login(data);
      setUser(response);
      return response;
    } catch (err) {
      setIsError(err as Error);
    } finally {
      setIsLoading(false);
    }

    return null;
  };

  return {
    data: user,
    isLoading,
    error,
    asyncMutate: fetchUser,
  };
};
