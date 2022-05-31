import Spinner from '@/components/Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const defaultClasses = `
    text-white
    bg-blue-700
    hover:bg-blue-800 
    focus:ring-4 
    focus:ring-blue-300 
    font-medium 
    rounded-lg 
    text-sm 
    px-5 py-2.5 
    text-center 
    mr-2 mb-2
    dark:bg-blue-600
    dark:hover:bg-blue-700
    dark:focus:ring-blue-800 
    min-w-[100px]
  `;

const Button: React.FC<ButtonProps> = ({
  text,
  isLoading,
  className,
  children,
  ...props
}) => (
  <button type="button" className={className ?? defaultClasses} {...props}>
    {isLoading ? <Spinner /> : children ?? text}
  </button>
);

export default Button;
