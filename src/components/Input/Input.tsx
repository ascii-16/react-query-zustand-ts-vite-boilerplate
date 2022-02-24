import { InputHTMLAttributes } from 'react';
import type { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

export interface Props<T = unknown>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  disabled?: boolean;
  errors?: FieldErrors;
  register: UseFormRegister<T>;
}

const Input = <T,>({
  disabled = false,
  placeholder,
  errors,
  label,
  name,
  value,
  register,
  ...rest
}: Props<T>) => {
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
      {errors && errors[name] && (
        <span className="">{errors[name].message}</span>
      )}
    </div>
  );
};

export default Input;
