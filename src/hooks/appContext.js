/*
    1. A global state to track when does the space svg appear
    2. every page goes to the next one
    3. last page goes to the begining

    Pre-requisites:
      1. a timer for pageSettings - 10.000ms
      2. a show/hide state --shouldShowSvg-- for the space svg

    LOGIC:
      --> page 0
      -> shouldShowSvg initially false
      -> timer initially not started
      -> space bar is hit =>
      --> transition to page 1
      -> timer starts
      -> if timer === 0 => shouldShowSvg = true
      -> space bar is hit =>
      -> shouldShowSvg = false
      --> transition to page 2
      ...
  */

import React, { createContext, useContext, useState } from "react";
import { useKeyPress } from "./useKeyPress";

const AppContext = createContext({
  shouldShowSvg: false,
});

export const useAppContext = () => {
  return useContext(AppContext);
};

export function AppContextProvider({ children }) {
  const [shouldShowSvg, setShouldShowSvg] = useState(false);
  // const [timer, setTimer] = useState(0);
  // const [pageNumber, setPageNumber] = useState(0);
  const isSpacePressed = useKeyPress();
  console.log("isSpacePressed", isSpacePressed);

  return (
    <AppContext.Provider value={{ shouldShowSvg, setShouldShowSvg }}>
      {children}
    </AppContext.Provider>
  );
}
