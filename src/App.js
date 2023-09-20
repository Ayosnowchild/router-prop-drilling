import { Outlet, ScrollRestoration } from "react-router-dom";
import "./App.css";
import React, { useState, createContext } from "react";

export let CountContext = createContext(0);
function App() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider className="App" value={{ count, setCount }}>
      <Outlet />
      <ScrollRestoration />
    </CountContext.Provider>
  );
}

export default App;
