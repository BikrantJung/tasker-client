"use client";
import { useUserStore } from "@/zustand/useUserStore";
import React from "react";

export const Navbar = () => {
  const { user } = useUserStore((state) => state);
  return <div>{user?.username ? user.username : "Please Login"}</div>;
};
