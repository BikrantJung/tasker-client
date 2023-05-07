"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@/hooks/useForm";
export function RegisterForm() {
  const { formValues, handleChange, handleSubmit } = useForm(() => {}, {
    username: "",
    email: "",
    password: "",
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="username"
            name="username"
            placeholder="John Doe"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <Button>Sign up</Button>
        </div>
      </div>
    </form>
  );
}
