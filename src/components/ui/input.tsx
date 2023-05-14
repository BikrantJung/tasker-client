import * as React from "react";

import { cn } from "@/lib/utils";
import { ActionButton } from "./button";
import { PlusIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface ActionInputProps extends InputProps {
  children: React.ReactNode;
}

export const ActionInput = (props: InputProps) => {
  const { children, type, className, ...rest } = props;
  return (
    <div className="relative flex h-10 w-full items-center rounded-md border border-input bg-secondary pr-2 text-sm placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background ">
      <input
        className={cn(
          "h-full flex-1 bg-transparent px-3 py-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ",
          className
        )}
        type={type}
      />
      <div className="right-2">{children}</div>
    </div>
  );
};

export { Input };
