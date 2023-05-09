import React from "react";
import { Logo } from "./svg/logo";

export const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Logo className="animate-pulse" />
    </div>
  );
};
