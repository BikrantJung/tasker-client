import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import React from "react";

export const GithubLoginButton = () => {
  return (
    <Button variant="outline" className="flex-1">
      <GithubIcon className="icon" />
      <span>Github</span>
    </Button>
  );
};
