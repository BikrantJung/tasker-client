import React, { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { axios } from "@/lib/axios";
import { useRouter } from "next/navigation";

interface LoginInput {
  email: string;
  password: string;
}

async function loginUser(loginInput: LoginInput) {
  return await axios.post("auth/login/password", {
    ...loginInput,
    emailProvider: "email",
  });
}

function useLoginUser(loginInput: LoginInput) {
  const router = useRouter();
  return useMutation(() => loginUser(loginInput), {
    onError(error: AxiosError) {
      if (error.response?.data) {
        const responseData = error.response.data as { message: string };
        // Object.values(error.response.data).map((item) => toast.error(item));
        toast.error(responseData.message);
      }
    },
    onSuccess() {
      toast.success("Logged in successfully");
      router.replace("/");
    },
  });
}

export { useLoginUser };
