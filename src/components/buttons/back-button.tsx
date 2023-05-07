"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="text-foreground"
    >
      <ChevronLeft className="icon" />
      <span>Back</span>
    </Button>
  );
};
export { BackButton };
