import Spinner from '@/components/ui/spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const defaultClasses = `
  inline-flex items-center justify-center
  rounded-md
  text-sm font-normal
  ring-offset-background transition-colors
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
  disabled:opacity-50 disabled:pointer-events-none
  bg-transparent text-blue-500 hover:bg-blue-400 hover:text-white
  border border-blue-500 hover:border-blue-400
  h-10 px-4 py-2
`;

export default function Button({
  text,
  isLoading,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button type="button" className={className ?? defaultClasses} {...props}>
      {isLoading ? <Spinner /> : (children ?? text)}
    </button>
  );
}
