import * as React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="p-20 h-screen hidden lg:block">{children}</div>
      <div className="px-4 lg:hidden text-4xl h-screen w-full text-center grid items-center">
        <p className="h-max self-end">
          Nahh... are you expecting this to work on mobile???
        </p>
        <p className="h-max text-2xl">
          Sign me up and I'll make a mobile version as well
        </p>
      </div>
    </>
  );
};

export default Layout;
