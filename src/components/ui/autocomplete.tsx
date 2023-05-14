import React, { useState } from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "./avatar";

interface AutocompleteProps {
  inputId?: string;
  inputClassname?: string;
  wrapperClassName?: string;
  children?: React.ReactNode;
}

export const Autocomplete = (props: AutocompleteProps) => {
  const { inputId, inputClassname, wrapperClassName, children } = props;
  return (
    <div
      className={cn(
        "flex flex-col border border-input rounded-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-ring focus-within:ring-offset-background",
        wrapperClassName
      )}
    >
      {children}
    </div>
  );
};

export const AutocompleteTitle = (
  props: React.HTMLAttributes<HTMLHeadingElement>
) => {
  return (
    <h4 className="text-xs px-2 py-1.5 font-medium text-muted-foreground" {...props} />
  );
};

export const AutocompleteItem = (props:React.HTMLAttributes<HTMLDivElement>) => {
    const {className,...rest} = props;
      return (
    <div className={cn("px-2 py-1.5 hover:bg-muted cursor-pointer",className) }{...rest}/>
  );
};

export const AutocompleteInput = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  const {className,type,...rest} = props;
  return (
    <input
    type={type}
      className={cn(
        "h-full flex-1 bg-secondary rounded-md px-3 py-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ",className
      )}
      {...rest}
    />
  );
};
