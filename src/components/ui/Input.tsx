import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Future: error, icon, etc.
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const baseStyles: string = 
      "flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background-light dark:ring-offset-background-dark file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    const themeStyles: string =
      "border-neutral-dark/50 dark:border-neutral-light/40 bg-transparent dark:bg-neutral-dark/20 text-foreground-light dark:text-foreground-dark placeholder:text-foreground-light/50 dark:placeholder:text-foreground-dark/50 focus-visible:ring-primary-DEFAULT dark:focus-visible:ring-primary-dark";
      // Removed focus-visible:border-primary-DEFAULT as ring is usually enough and border change can shift layout slightly.

    const combinedClassName = `${baseStyles} ${themeStyles} ${className || ''}`;

    return (
      <input
        type={type}
        className={combinedClassName}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
