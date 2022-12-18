import React, { useEffect, useState } from 'react';
import Space from "../../images/space.svg";
import { useAppContext } from '../../context/appContext';

const Page4 = () => {
  const { shouldShowSvg, setTimer } = useAppContext();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timerInt = countdown > 0 &&
      window.setInterval(() => {
        setCountdown((time) => time - 1);
      }, 1000);
    return () => clearInterval(timerInt);
  }, [countdown])

  useEffect(() => {
    setTimer(10000);
  }, [])

  const spaceClass = shouldShowSvg ? "visible" : "invisible";

  return (
    <div>
      <div className="grid grid-cols-2 items-center">
        {countdown === 0 ? (
          <p className="text-3xl text-gray-700">Uh-Oh it's here!</p>
        ) : (
          <p className="text-3xl text-gray-700">
            Time left until the space svg appears
            <span className="ml-6 text-6xl text-blue-600">{countdown}</span>
            <span className="text-blue-600">s</span>
          </p>
        )}
        <Space className={spaceClass + ` animate-bounce`} />
      </div>
      <h1 className="text-6xl mt-40 mb-20">
        How did I use React context in this project?
      </h1>
      <div className="text-3xl text-gray-700">
        <p className="mb-6">
          I've used it for exposing 3 React state values in the entire app.
        </p>
        <p>Those 3 are:</p>
        <ul className="grid gap-y-8 m-12">
          <li className="max-w-prose">
            <span className="mr-2 italic text-yellow-500 bg-slate-700 px-2 rounded-xl text-2xl">
              shouldShowSvg
            </span>
            keeps track of whether the space svg should show or not
          </li>
          <li className="max-w-prose">
            <span className="mr-2 italic text-yellow-500 bg-slate-700 px-2 rounded-xl text-2xl">
              timer
            </span>
            keeps track of the time left until the space svg should pop up. It's
            being given a new value on every new page render (with every
            spacebar key stroke)
          </li>
          <li>
            <span className="mr-2 italic text-yellow-500 bg-slate-700 px-2 rounded-xl text-2xl">
              pageNumber
            </span>
            keeps track of the page number
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page4