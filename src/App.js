import { createContext, useState } from "react";

import List from "./List";
import Switch from "./Switch";

import "./styles.css";

export const ThemeContext = createContext();

const themes = {
  light: {
    background: "white",
    color: "black"
  },
  dark: {
    background: "black",
    color: "white"
  }
};

export default function App() {
  const [theme, setTheme] = useState("dark");

  function handleToggleOnSwitch() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  const providerValue = {
    theme: themes[theme],
    handleToggleOnSwitch
  };

  return (
    <div className={`App theme-${theme}`}>
      <ThemeContext.Provider value={providerValue}>
        <Switch></Switch>
        <List></List>
      </ThemeContext.Provider>
    </div>
  );
}
