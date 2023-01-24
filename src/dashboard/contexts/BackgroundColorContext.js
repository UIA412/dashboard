import { createContext } from "react";

export const backgroundColors = {
  primary: "primary",
  green: "green",
};

export const BackgroundColorContext = createContext({
  color: backgroundColors.blue,
  changeColor: (color) => {},
});
