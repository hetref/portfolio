import React from "react";
import SaaSNavbar from "@/components/SaaSNavbar";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SaaSNavbar />
      <main className="pt-28">{children}</main>
    </div>
  );
};

export default layout;