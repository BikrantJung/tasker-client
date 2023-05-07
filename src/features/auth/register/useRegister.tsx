import React, { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { axios } from "@/lib/axios";
import { useRouter } from "next/navigation";

interface RegisterInput {
  email: string;
  password: string;
  username: string;
}

async function registerUser(registerInput: RegisterInput) {
  return await axios.post("auth/register/", {
    ...registerInput,
    emailProvider: "email",
  });
}

function useRegisterUser(registerInput: RegisterInput) {
  const router = useRouter();
  return useMutation(() => registerUser(registerInput), {
    onError(error: AxiosError) {
      if (error.response?.data) {
        const responseData = error.response.data as { message: string };
        // Object.values(error.response.data).map((item) => toast.error(item));
        toast.error(responseData.message);
      }
    },
    onSuccess() {
      toast.success("Registered successfully");
      router.replace("/");
    },
  });
}

export { useRegisterUser };
