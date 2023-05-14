import { axios } from "@/lib/axios";
import { UserWithToken } from "@/types";
import { useUserStore } from "@/zustand/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

async function getProjects() {
  const res = await axios.get("project/", {
    withCredentials: true,
  });
  return res.data;
}

function useGetProjects() {
  return useQuery(["projects"], () => getProjects(), {
    retry: false,
    onError(error: AxiosError) {
      if (error.response?.data) {
        const responseData = error.response.data as {
          message: string;
          statusCode: number;
        };
        // Object.values(error.response.data).map((item) => toast.error(item));
        if (responseData.statusCode === 401) {
          toast.error(responseData.message);
        }
      }
    },
    onSuccess({ data }) {},
  });
}

export { useGetProjects };
