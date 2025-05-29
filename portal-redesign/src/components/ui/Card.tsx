import React from 'react';

// Card component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-lg border border-neutral-DEFAULT dark:border-neutral-dark/60 bg-background-light dark:bg-neutral-dark shadow-md text-foreground-light dark:text-foreground-dark ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = 'Card';

// CardHeader component
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`flex flex-col space-y-1.5 p-6 ${className || ''}`} // Standard padding for header
      {...props}
    >
      {children}
    </div>
  )
);
CardHeader.displayName = 'CardHeader';

// CardTitle component
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={`text-xl font-semibold leading-none tracking-tight text-foreground-light dark:text-foreground-dark ${className || ''}`}
      {...props}
    >
      {children}
    </h3>
  )
);
CardTitle.displayName = 'CardTitle';

// CardDescription component
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={`text-sm text-foreground-light/70 dark:text-foreground-dark/70 ${className || ''}`} // Muted color
      {...props}
    >
      {children}
    </p>
  )
);
CardDescription.displayName = 'CardDescription';

// CardContent component
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-0 ${className || ''}`} {...props}> {/* Standard padding, pt-0 if header used */}
      {children}
    </div>
  )
);
CardContent.displayName = 'CardContent';

// CardFooter component
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center p-6 pt-0 ${className || ''}`} // Standard padding, pt-0 if content used
      {...props}
    >
      {children}
    </div>
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
