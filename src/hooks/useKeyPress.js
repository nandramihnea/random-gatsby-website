import { useState, useEffect } from "react";

export const useKeyPress = () => {
  const [keyPressed, setPressedKey] = useState(false);

  const detectKeyPress = (e) => {
    if(e.which === 32) {
      setPressedKey(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeyPress, true);
    return () => {
      document.removeEventListener("keydown", detectKeyPress, true);
    };
  }, []);

  return keyPressed;
};
