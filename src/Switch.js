import { useContext } from "react";
import { ThemeContext } from "./App";

export default function Switch() {
  const themeProvider = useContext(ThemeContext);
  return (
    <label className="switch">
      <input
        type="checkbox"
        onClick={themeProvider.handleToggleOnSwitch}
      ></input>
      <span className="slider round"></span>
    </label>
  );
}
