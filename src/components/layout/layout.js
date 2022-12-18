import * as React from "react";
import { layout, content } from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <div className={content + " p-20 h-screen hidden lg:block"}>{children}</div>
      <div className={content + " px-4 lg:hidden text-4xl h-screen w-full text-center grid items-center"}>
        <p className="h-max self-end leading-12">
          Nahh... are you expecting this to work on mobile???
        </p>
        <p className="h-max text-2xl">
          Sign me up and I'll make a mobile version as well
        </p>
      </div>
    </div>
  );
};

export default Layout;
