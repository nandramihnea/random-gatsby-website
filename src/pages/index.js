import Layout from "/src/components/layout/layout";
import React from "react";
import { useKeyPress } from "../hooks/useKeyPress";
import { useAppContext } from "../context/appContext";
import Page1 from "../components/page1/page1";
import Page2 from "../components/page2/page2";
import Page3 from "../components/page3/page3";
import Page4 from "../components/page4/page4";
import Page5 from "../components/page5/page5";

const IndexPage = () => {
  useKeyPress();

  const { pageNumber } = useAppContext();

  const renderPages = () => {
    switch (pageNumber) {
      case 1: {
        return <Page1 />;
      }
      case 2: {
        return <Page2 />;
      }
      case 3: {
        return <Page3 />;
      }
      case 4: {
        return <Page4 />;
      }
      case 5: {
        return <Page5 />;
      }
      default:
        <Page1 />;
    }
  }

  return <Layout>{renderPages()}</Layout>;
};

export default IndexPage;
