import React from 'react';
import { useAppContext } from '../../context/appContext';

const Page5 = () => {
  const { setPageNumber } = useAppContext();

  const onClickHandler = () => {
    setPageNumber(1);
  };


  return (
    <div className='grid justify-items-center gap-y-20 items-center'>
      <p className="text-3xl text-gray-700">
        I hope you enjoyed the result as much as I did enjoy this challange
      </p>
      <iframe
        src="https://giphy.com/embed/1eChSPFlFeaAzsoB9v"
        width="480"
        height="480"
        class="giphy-embed"
        allowFullScreen
        title='hopefully'
      ></iframe>
      <div className="bg-lime-200 rounded-xl p-8 w-fit">
        <p className="text-xl pb-8">Can't get enough of this masterpiece?</p>
        <button
          className="bg-green-600 text-lg text-slate-200 px-6 py-3 rounded-lg"
          onClick={onClickHandler}
        >
          Start over
        </button>
      </div>
    </div>
  );
}

export default Page5