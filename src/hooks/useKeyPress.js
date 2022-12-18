// check if spacebar is pressed
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";

//this should be somehow calculated but ain't nobody got time for that
const NUMBER_OF_PAGES = 5;

export const useKeyPress = () => {
  const { setShouldShowSvg, setPageNumber, pageNumber } =
    useAppContext();

  const detectKeyPress = (e) => {
    // 32 is the ASCII key for the spacebar key
    if (e.which === 32) {
      if (pageNumber < NUMBER_OF_PAGES) {
        setShouldShowSvg(false);
        setPageNumber(pageNumber + 1);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeyPress, true);
    return () => {
      document.removeEventListener("keydown", detectKeyPress, true);
    };
  }, [pageNumber]);
};
