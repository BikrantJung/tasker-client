"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@/hooks/useForm";
import { useLoginUser } from "./hooks";

export function LoginForm() {
  const { formValues, handleChange, handleSubmit } = useForm(registerUser, {
    email: "",
    password: "",
  });
  const { mutate, isLoading } = useLoginUser(formValues);
  function registerUser() {
    mutate();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <Button isLoading={isLoading} type="submit">
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}
