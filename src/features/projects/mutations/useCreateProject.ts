import { axios } from "@/lib/axios";
import { UserWithToken } from "@/types";
import { useUserStore } from "@/zustand/useUserStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

interface CreateProjectInput {
  project_title: string;
  project_description?: string;
  users: string[];
}

async function createProject() {
  const res = await axios.post(
    "project/",
    {
      project_title: "Project 1",
      project_description: "Project 1 description",
      users: ["64553b0195f436f1a45bdc47"],
    },
    {
      withCredentials: true,
    }
  );
  return res.data;
}

function useCreateProject() {
  return useMutation(() => createProject(), {
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
    onSuccess({ data }) {
      console.log(data);
    },
  });
}

export { useCreateProject };
