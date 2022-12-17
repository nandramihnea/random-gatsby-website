import Layout from "/src/components/layout/layout";
import React from "react";
import { useKeyPress } from "../hooks/useKeyPress";
import { useAppContext } from "../context/appContext";
import Page1 from "../components/page1/page1";
import Page2 from "../components/page2/page2";
import Page3 from "../components/page3/page3";

const IndexPage = () => {
  useKeyPress();

  const { pageNumber } = useAppContext();

  const renderPages = () => {
    switch(pageNumber) {
      case 1: {
        return <Page1 />
      }
      case 2: {
        return <Page2 />
      }
      case 3: {
        return <Page3 />
      }
      default: <Page1 />
    }
  }

  return <Layout>{renderPages()}</Layout>;
};

export default IndexPage;
