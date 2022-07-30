import { InputHTMLAttributes } from 'react';
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export interface Props<T = unknown, U extends FieldValues = FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  disabled?: boolean;
  register: UseFormRegister<T>;
  errors?: FieldErrors<U>;
}

const Input = <T, U>({
  disabled = false,
  placeholder,
  errors,
  label,
  name,
  value,
  register,
  ...rest
}: Props<T, U>) => {
  return (
    <div className="flex flex-col">
      <label className="flex" htmlFor={name}>
        {label ?? ''}
      </label>
      <input
        className="border rounded-lg p-2 w-full mb-2"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...register(name as Path<T>)}
        {...rest}
      />
      {errors && errors[name as keyof U] && (
        <span className="">{errors[name as keyof U]?.message as string}</span>
      )}
    </div>
  );
};

export default Input;
