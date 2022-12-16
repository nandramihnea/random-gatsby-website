/*
    1. A global state to track when does the space svg appear
    2. every page goes to the next one
    3. last page goes to begging

    Pre-requisites:
      1. a timer for pageSettings - 10.000ms
      2. a show/hide state for the space svg

    LOGIC:
      -> 
  */

import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [first, setfirst] = useState(second);

  return <AppContext.Provider value={}>
    {children}
  </AppContext.Provider>;
}
