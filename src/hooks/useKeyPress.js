// check if spacebar is pressed
import { useEffect } from "react";
import { useAppContext } from "./appContext";

export const useKeyPress = () => {
  const { shouldShowSvg, setShouldShowSvg } = useAppContext();
  console.log("shouldShow", shouldShowSvg);

  const detectKeyPress = (e) => {
    if(e.which === 32) {
      setShouldShowSvg(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeyPress, true);
    return () => {
      document.removeEventListener("keydown", detectKeyPress, true);
    };
  }, []);
};
