import React from "react";
import "@/styles/globals.css";
import { useState } from "react";
import { AuthProvider } from "@/components/Context";
import HomeNew from "@/components/HomeNew";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ToastContainer position="top-right" autoClose={2000} draggable />
      <HomeNew Component={Component} pageProps={pageProps} />
      {/* <Component {...pageProps} /> */}
    </AuthProvider>
  );
}
