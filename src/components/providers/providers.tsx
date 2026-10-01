"use client";
import { Provider } from "react-redux";
import ReactNode, { useRef } from "react";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppStore, createStore, PreloadedState } from "<prefix>/store/store";
export default function Providers({
  children,
  preloadedState,
}: {
  children: React.ReactNode;
  preloadedState: PreloadedState;
}) {
  const myClient = new QueryClient();

  const storeRef = useRef<null | AppStore>(null);
  if (storeRef.current === null) {
    storeRef.current = createStore(preloadedState);
  }
  return (
    <>
      <Provider store={storeRef.current}>
        <QueryClientProvider client={myClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} position="bottom" />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
