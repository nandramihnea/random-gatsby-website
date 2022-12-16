import Layout from "/src/components/layout";
import Space from '../images/space.svg';
import React from "react";
import { AppContextProvider } from "../hooks/appContext";

const IndexPage = () => {

  return (
    <AppContextProvider>
      <Layout>
        <div className="grid h-full justify-items-center content-center">
          <iframe
            src="https://giphy.com/embed/tmQrpA8zpG4a16SSxm"
            width="580"
            height="580"
            allowFullScreen
            title="monkey"
          ></iframe>
          <div className="flex gap-6 pt-20 items-center">
            <p className="text-6xl">Press space</p>
            <Space />
            <p className="text-6xl">when bored</p>
          </div>
        </div>
      </Layout>
    </AppContextProvider>
  );
};

export default IndexPage;
