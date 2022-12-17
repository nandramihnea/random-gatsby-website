import './src/styles/global.css';
import React from "react";
import { AppContextProvider } from './src/context/appContext';

export const wrapRootElement = ({ element }) => (
  <AppContextProvider>{element}</AppContextProvider>
);