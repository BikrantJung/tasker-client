"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center gap-2 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-8 px-3",
        xs: "h-7 py-2 px-4 text-xs",
        sm: "h-7 px-3 rounded-md",
        lg: "h-10 px-6 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      isLoading = false,
      disabled,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={isLoading || disabled}
      >
        {isLoading && (
          <div className="absolute">
            <svg
              width="14"
              height="14"
              className="animate-spin text-gray-300"
              viewBox="0 0 14 14"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_56_7" fill="white">
                <path d="M14 7C14 8.38447 13.5895 9.73785 12.8203 10.889C12.0511 12.0401 10.9579 12.9373 9.67878 13.4672C8.3997 13.997 6.99223 14.1356 5.63437 13.8655C4.2765 13.5954 3.02922 12.9287 2.05025 11.9497C1.07128 10.9708 0.4046 9.7235 0.134503 8.36563C-0.135594 7.00777 0.00302985 5.6003 0.532843 4.32122C1.06266 3.04213 1.95986 1.94888 3.11101 1.17971C4.26215 0.410543 5.61553 -1.65096e-08 7 0L7 1.67532C5.94688 1.67532 4.9174 1.9876 4.04176 2.57269C3.16612 3.15777 2.48365 3.98937 2.08063 4.96233C1.67762 5.93529 1.57218 7.00591 1.77763 8.03879C1.98308 9.07168 2.49021 10.0204 3.23488 10.7651C3.97955 11.5098 4.92832 12.0169 5.96121 12.2224C6.99409 12.4278 8.06471 12.3224 9.03767 11.9194C10.0106 11.5164 10.8422 10.8339 11.4273 9.95824C12.0124 9.0826 12.3247 8.05312 12.3247 7L14 7Z" />
              </mask>
              <path
                d="M14 7C14 8.38447 13.5895 9.73785 12.8203 10.889C12.0511 12.0401 10.9579 12.9373 9.67878 13.4672C8.3997 13.997 6.99223 14.1356 5.63437 13.8655C4.2765 13.5954 3.02922 12.9287 2.05025 11.9497C1.07128 10.9708 0.4046 9.7235 0.134503 8.36563C-0.135594 7.00777 0.00302985 5.6003 0.532843 4.32122C1.06266 3.04213 1.95986 1.94888 3.11101 1.17971C4.26215 0.410543 5.61553 -1.65096e-08 7 0L7 1.67532C5.94688 1.67532 4.9174 1.9876 4.04176 2.57269C3.16612 3.15777 2.48365 3.98937 2.08063 4.96233C1.67762 5.93529 1.57218 7.00591 1.77763 8.03879C1.98308 9.07168 2.49021 10.0204 3.23488 10.7651C3.97955 11.5098 4.92832 12.0169 5.96121 12.2224C6.99409 12.4278 8.06471 12.3224 9.03767 11.9194C10.0106 11.5164 10.8422 10.8339 11.4273 9.95824C12.0124 9.0826 12.3247 8.05312 12.3247 7L14 7Z"
                stroke="currentColor"
                strokeWidth="2"
                mask="url(#path-1-inside-1_56_7)"
              />
            </svg>
          </div>
        )}
        <div
          className={`flex items-center gap-1 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          {children}
        </div>
      </Comp>
    );
  }
);
Button.displayName = "Button";

const ActionButton = (props: ButtonProps) => {
  const {
    variant = "outline",
    size = "xs",
    className,
    children,
    ...rest
  } = props;
  return (
    <Button
      size={size}
      className={cn(
        "border border-input bg-white px-1 text-[8px] shadow-sm sm:px-2 sm:text-xs ",
        buttonVariants({ variant, size, className })
      )}
      variant={variant}
      {...rest}
    >
      {children}
    </Button>
  );
};

export { Button, buttonVariants, ActionButton };
