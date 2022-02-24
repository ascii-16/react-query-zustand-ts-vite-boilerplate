import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/Button';
import Input from '@/components/Input/Input';
import { useAppDispatch } from '@/hooks/useRedux';
import useLoading from '@/hooks/useLoading';
import { LOGIN } from '@/store/actions/auth.actions';
import authSlice from '@/store/slices/auth.slice';
import { LoginBody } from '@/types/auth';
import { loginSchema } from '@/lib/validation';

const Login = () => {
  const dispatch = useAppDispatch();
  const isLoading = useLoading(LOGIN);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>({ resolver: yupResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginBody> = (data) => {
    dispatch(authSlice.actions.login(data));
  };

  return (
    <form
      className="m-auto w-[90%] md:w-[30%]"
      onSubmit={handleSubmit(onSubmit)}
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
      <Button text="Login" type="submit" isLoading={isLoading} />
    </form>
  );
};

export default Login;
