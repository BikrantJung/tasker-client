"use client";
import { useUserStore } from "@/zustand/useUserStore";
import React, { useCallback } from "react";
import { Logo } from "../svg/logo";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { generateUserFallbackName } from "@/lib/utils";
import { Button } from "../ui/button";
import { NavbarDropdown } from "./navbar-dropdown";

export const Navbar = () => {
  const { user } = useUserStore((state) => state);
  const fallbackUser = generateUserFallbackName(
    user?.username ? user.username : ""
  );
  return (
    <div className="3xl:px-16 border-b border-input px-8 py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Logo className="h-7 w-7" />
        </Link>
        <ul className="hidden items-center gap-8 text-sm md:flex lg:text-base">
          <Link href="/" className="link no-underline">
            <li>Features</li>
          </Link>
          <Link href="/" className="link no-underline">
            <li>Download</li>
          </Link>
          <Link href="/" className="link no-underline">
            <li>Resources</li>
          </Link>
          <Link href="/" className="link no-underline">
            <li>Company</li>
          </Link>
        </ul>
        {user ? (
          <div className="flex items-center gap-4">
            <NavbarDropdown
              trigger={
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.avatar} alt="@shadcn" />
                  <AvatarFallback className="text-sm">
                    {fallbackUser}
                  </AvatarFallback>
                </Avatar>
              }
            />
            <Link href="/dashboard" className="no-underline">
              <Button variant="outline">Dashboard</Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/login" className="no-underline">
              <Button>Login</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
