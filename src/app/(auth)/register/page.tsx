import React from "react";
import { GitHub, GithubCircle, Svg3DAddHole } from "iconoir-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Github } from "lucide-react";
import { GoogleSVG } from "@/components/svg/google";
import Link from "next/link";
import { BackButton } from "@/components/buttons/back-button";
function RegisterPage() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="mx-4 mt-4 flex items-center justify-between">
        <BackButton />
        <Link href="/login">
          <Button variant="ghost">Login</Button>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex w-full max-w-xs flex-col gap-4 rounded border p-4">
          <div className="flex flex-col items-center gap-2">
            <Svg3DAddHole />
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Welcome
            </h4>
            <p className="text-sm text-muted-foreground">
              Create an account to continue using taskify
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="username" placeholder="John Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="flex flex-col">
            <Button>Login</Button>
          </div>
          <div className="flex items-center gap-1">
            <Separator className="flex-1" />
            <p className="text-xs uppercase">Or continue with</p>
            <Separator className="flex-1" />
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="outline">
              <Github className="icon" />
              <span>Github</span>
            </Button>
            <Button variant="outline">
              <GoogleSVG />
              <span>Google</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
