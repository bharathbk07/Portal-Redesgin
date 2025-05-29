import React from 'react';

// Define types for props
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {

    // Base styles
    const baseStyles: string = 
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background-light dark:ring-offset-background-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-DEFAULT dark:focus-visible:ring-primary-dark focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    // Variant styles
    const variantStyles: Record<ButtonVariant, string> = {
      primary: "bg-primary-DEFAULT dark:bg-primary-dark text-primary-foreground hover:bg-primary-DEFAULT/90 dark:hover:bg-primary-dark/90",
      secondary: "bg-secondary-DEFAULT dark:bg-secondary-dark text-secondary-foreground hover:bg-secondary-DEFAULT/90 dark:hover:bg-secondary-dark/90",
      outline: "border border-neutral-dark/50 dark:border-neutral-light/50 bg-transparent hover:bg-neutral-DEFAULT/20 dark:hover:bg-neutral-dark/30 hover:text-foreground-light dark:hover:text-foreground-dark",
      ghost: "hover:bg-neutral-DEFAULT/20 dark:hover:bg-neutral-dark/30 text-foreground-light dark:text-foreground-dark",
      link: "text-primary-DEFAULT dark:text-primary-dark underline-offset-4 hover:underline",
      destructive: "bg-error-DEFAULT dark:bg-error-dark text-error-foreground hover:bg-error-DEFAULT/90 dark:hover:bg-error-dark/90",
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, string> = {
      sm: "h-9 rounded-sm px-3", // Updated to rounded-sm for sm as per typical designs
      md: "h-10 px-4 py-2 rounded-md",
      lg: "h-11 rounded-lg px-8", // Updated to rounded-lg for lg
    };
    
    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`;

    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
