import React, { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { axios } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/zustand/useUserStore";
import { UserWithToken } from "@/types";

interface LoginInput {
  email: string;
  password: string;
}

async function loginUser(loginInput: LoginInput) {
  return await axios.post(
    "auth/login/password",
    {
      ...loginInput,
      emailProvider: "email",
    },
    { withCredentials: true }
  );
}

function useLoginUser(loginInput: LoginInput) {
  const { setUser } = useUserStore((state) => state);
  const router = useRouter();
  return useMutation(() => loginUser(loginInput), {
    onError(error: AxiosError) {
      if (error.response?.data) {
        const responseData = error.response.data as { message: string };
        // Object.values(error.response.data).map((item) => toast.error(item));
        toast.error(responseData.message);
      }
    },
    onSuccess({ data }) {
      const userData: UserWithToken = data;
      setUser(userData);
      toast.success("Logged in successfully");
      router.replace("/");
    },
  });
}

export { useLoginUser };
