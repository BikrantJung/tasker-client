"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { LoginProvider } from "@/features/auth/login";

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          staleTime: 300000,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <LoginProvider>{children}</LoginProvider>
    </QueryClientProvider>
  );
}

export { Providers };
