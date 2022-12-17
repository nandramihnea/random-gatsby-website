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

      // edge case not handled: 2 consecutive pages have the same timer value
      // e.g: page1: setTimer(3000)   -->    page2: setTimer(3000)
      // in this case, the spaceSvg wouldn't appear
  */

import React, { useState, createContext, useContext, useEffect } from "react";

const defaultState = {
  shouldShowSvg: false,
  setShouldShowSvg: () => {},
  pageNumber: 1,
  setPageNumber: () => {},
  timer: 0,
  setTimer: () => {},
};

export const AppContext = createContext(defaultState);

export const useAppContext = () => {
  return useContext(AppContext);
};

export function AppContextProvider({ children }) {
  const [shouldShowSvg, setShouldShowSvg] = useState(false);
  const [timer, setTimer] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const countdown = setTimeout(() => {
      if(pageNumber !== 1) {
        setShouldShowSvg(true);
      }
    }, timer);
    return () => clearTimeout(countdown);
  }, [timer]);

  return (
    <AppContext.Provider
      value={{
        shouldShowSvg,
        setShouldShowSvg,
        timer,
        setTimer,
        pageNumber,
        setPageNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
