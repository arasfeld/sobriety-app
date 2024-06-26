type ColorWithShades = {
  light: string;
  main: string;
  dark: string;
};

export type Colors = {
  primary: ColorWithShades;
  secondary: ColorWithShades;
  error: ColorWithShades;
  warning: ColorWithShades;
  info: ColorWithShades;
  success: ColorWithShades;
  background: {
    default: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  border: string;
  common: {
    black: string;
    white: string;
  };
};
