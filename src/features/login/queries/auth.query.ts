import { useMutation } from '@tanstack/react-query';
import { type LoginBody } from '../types/auth';
import { login } from '../api/auth.service';

export const useLoginQuery = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (body: LoginBody) => {
      const res = await login(body);
      return res;
    },
  });
};
