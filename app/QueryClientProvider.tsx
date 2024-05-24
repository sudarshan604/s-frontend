"use client";
import React, { PropsWithChildren } from "react";
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import ThemeSwitcher from "@/components/theme-switcher";

const queryClient = new QueryClient();
//   // {
//   // defaultOptions: {
//   //   queries: {
//   //     retry: 3,
//   //     staleTime: 0,
//   //     refetchOnWindowFocus: false,
//   //     refetchOnReconnect: false,
//   //     refetchOnMount: false,
//   //   },
//   // },
// }

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      <ThemeSwitcher />
      {children}
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
