import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NewSidebar from "./NewSideBar";

const Layout = ({ heading, children }) => {
  return (
    <NewSidebar>
      <main className="bg-gray-100 min-h-screen">
        <Header heading={heading} />
        {children}
      </main>
    </NewSidebar>
  );
};

export default Layout;
