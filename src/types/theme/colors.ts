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
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
};
