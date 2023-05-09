import { Sidebar } from "@/components/sidebar/sidebar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex px-8 pl-6">
      <div className="w-full max-w-[8rem]  px-2 py-4">
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default DashboardLayout;
