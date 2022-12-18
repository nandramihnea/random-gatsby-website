import React from "react";
import Space from '../../images/space.svg';

const Page1 = () => {
  return (
    <div className="grid h-full justify-items-center content-center">
      <iframe
        src="https://giphy.com/embed/tmQrpA8zpG4a16SSxm"
        width="580"
        height="580"
        allowFullScreen
        title="monkey"
      ></iframe>
      <div className="flex gap-6 pt-20 items-center mb-8">
        <p className="text-6xl">Press space</p>
        <Space className="animate-bounce" />
        <p className="text-6xl">when bored</p>
      </div>
      <p>Spacebar toggles between pages</p>
    </div>
  );
}

export default Page1;