import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
