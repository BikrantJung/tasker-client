import { BackButton } from "@/components/buttons/back-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  GithubLoginButton,
  GoogleLoginButton,
  LoginForm,
} from "@/features/auth";

import { CloverIcon } from "lucide-react";
import Link from "next/link";
function LoginPage() {
  return (
    <div className="flex h-screen flex-col  justify-center gap-4">
      <div className="mx-4 mt-4 flex items-center justify-between">
        <BackButton />
        <Link href="/register">
          <Button variant="ghost">Signup</Button>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex w-full max-w-xs flex-col gap-4 rounded border p-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center">
              <CloverIcon />
            </div>
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Welcome Back
            </h4>
          </div>
          <LoginForm />
          <div className="flex items-center gap-1">
            <Separator className="flex-1" />
            <p className="text-xs uppercase">Or continue with</p>
            <Separator className="flex-1" />
          </div>
          <div className="flex items-center gap-2">
            <GithubLoginButton />
            <GoogleLoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
