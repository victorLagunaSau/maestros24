import React from "react";
import Footer from "./Footer";
import HeaderGrados from "./HeaderGrados";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderGrados />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
