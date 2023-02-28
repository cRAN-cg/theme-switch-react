import { useContext } from "react";

import { ThemeContext } from "./App";

export default function ListItem() {
  const themeProvider = useContext(ThemeContext);

  return (
    <li style={{ ...themeProvider.theme }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </li>
  );
}
