import React, { useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import Space from "../../images/space.svg";
import { useAppContext } from '../../context/appContext';

const Page2 = () => {
  const { shouldShowSvg, setTimer } = useAppContext();

  useEffect(() => {
    setTimer(3000);
  }, [])

  return (
    <div className="grid grid-cols-2 gap-y-20">
      <StaticImage
        src="../../images/hw1.png"
        alt="hw1"
        placeholder="blurred"
        layout="fixed"
        width={700}
        height={700}
      />
      <div className="grid content-between justify-items-center">
        <StaticImage
          src="../../images/hw2.png"
          alt="hw2"
          placeholder="blurred"
          layout="fixed"
          width={400}
          height={60}
        />
        <StaticImage
          src="../../images/laugh.jpg"
          alt="laugh"
          placeholder="blurred"
          layout="fixed"
          width={500}
          height={500}
        />
      </div>
      {shouldShowSvg && (
        <Space className="col-span-2 justify-self-center animate-bounce" />
      )}
    </div>
  );
}

export default Page2