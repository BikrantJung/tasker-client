import { GoogleSVG } from "@/components/svg/google";
import { Button } from "@/components/ui/button";
import React from "react";

export const GoogleLoginButton = () => {
  return (
    <Button variant="outline" className="flex-1">
      <GoogleSVG />
      <span>Google</span>
    </Button>
  );
};
