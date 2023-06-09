import React from "react";
import { Outlet } from 'react-router'
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
