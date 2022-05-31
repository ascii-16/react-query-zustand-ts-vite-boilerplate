import type { LoginBody } from '@/types/auth';

// Dummy login request that will resolve in 2 seconds
export const login = (body: LoginBody) => {
  const res: Promise<boolean> = new Promise((resolve, reject) => {
    if (body.username !== 'user' || body.password !== 'user') {
      reject('Invalid username or password');
    }

    setTimeout(() => resolve(true), 2000);
  });
  return res;
};
