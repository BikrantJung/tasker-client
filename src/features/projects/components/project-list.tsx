"use client";
import React from "react";
import { useGetProjects } from "../queries/useGetProjects";
import { CreateProjectModal } from "./create-project-modal";

export const ProjectList = () => {
  const { data } = useGetProjects();
  return (
    <div>
      {JSON.stringify(data, null, 2)}{" "}
      <div>
        <CreateProjectModal />
      </div>
    </div>
  );
};
