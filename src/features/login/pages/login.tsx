import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { loginSchema } from '../validation/login-schema';
import useAuthStore from '@/store/auth-store';
import { type LoginBody } from '../types/auth';
import { useLoginMutation } from '../hooks/use-login-mutation';

export default function LoginPage() {
  const { setIsAuthenticated } = useAuthStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>({ resolver: yupResolver(loginSchema) });

  const mutation = useLoginMutation({
    onSuccess: () => {
      setIsAuthenticated(true);
    },
    onError: (err) => {
      toast.error(err.message, { theme: 'colored' });
    },
  });

  const onSubmit: SubmitHandler<LoginBody> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form
      className="m-auto w-[90%] md:w-[30%]"
      onSubmit={() => handleSubmit(onSubmit)}
    >
      <p className="text-center text-sm mb-2">Username: user</p>
      <p className="text-center text-sm mb-3">Password: user</p>
      <Input
        errors={errors}
        placeholder="Username"
        label="Username"
        id="username"
        register={register}
        name="username"
      />
      <Input
        errors={errors}
        placeholder="Password"
        label="Password"
        type="password"
        register={register}
        name="password"
      />
      <Button text="Login" type="submit" isLoading={mutation.isPending} />
    </form>
  );
}
