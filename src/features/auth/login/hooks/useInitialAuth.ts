import { axios } from "@/lib/axios";
import { UserWithToken } from "@/types";
import { useUserStore } from "@/zustand/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

async function validateCookie() {
  return await axios.get("auth/login/validate", {
    withCredentials: true,
  });
}

function useInitialLogin() {
  const { setUser } = useUserStore((state) => state);
  return useQuery(["initial-login"], validateCookie, {
    retry: false,
    onError(error: AxiosError) {
      if (error.response?.data) {
        const responseData = error.response.data as {
          message: string;
          statusCode: number;
        };
        // Object.values(error.response.data).map((item) => toast.error(item));
        if (responseData.statusCode === 401) {
          setUser(undefined);
        }
      }
    },
    onSuccess({ data }) {
      const userData: UserWithToken = data;
      setUser(userData);
    },
  });
}

export { useInitialLogin };
