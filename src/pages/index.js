import Layout from "/src/components/layout";
import Space from '../images/space.svg';
import { useKeyPress } from "../hooks/useKeyPress";
import React, { useEffect } from "react";

const IndexPage = () => {
  const spacePressed = useKeyPress();

  useEffect(() => {
    console.log('spacePressed', spacePressed)
  }, [spacePressed]);

  return (
    <Layout>
      <div className="grid h-full justify-items-center content-center">
        <iframe
          src="https://giphy.com/embed/tmQrpA8zpG4a16SSxm"
          width="580"
          height="580"
          allowFullScreen
        ></iframe>
        <div className="flex gap-6 pt-20 items-center">
          <p className="text-6xl">Press space</p>
          <Space />
          <p className="text-6xl">when bored</p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
