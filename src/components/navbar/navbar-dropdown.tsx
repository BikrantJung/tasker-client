"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import { useUserStore } from "@/zustand/useUserStore";

interface NavbarDropdownProps {
  trigger: React.ReactNode;
}

export const NavbarDropdown = (props: NavbarDropdownProps) => {
  const { resetUser } = useUserStore((state) => state);
  const { trigger } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="relative right-8 w-36">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="gap-1 text-muted-foreground"
            onClick={() => {
              resetUser();
            }}
          >
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
