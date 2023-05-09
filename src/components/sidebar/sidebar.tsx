"use client";
import React from "react";
import { Button } from "../ui/button";
import { BoxesIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex w-full flex-col gap-3">
      <Link href="/dashboard">
        <Button
          className="w-full"
          variant={pathname === "/dashboard" ? "secondary" : "ghost"}
        >
          <BoxesIcon className="icon" />
          <span>Projects</span>
        </Button>
      </Link>
      <Link href="/dashboard/tasks">
        <Button
          className="w-full"
          variant={pathname === "/dashboard/tasks" ? "secondary" : "ghost"}
        >
          <BoxesIcon className="icon" />
          <span>Tasks</span>
        </Button>
      </Link>
    </div>
  );
};
