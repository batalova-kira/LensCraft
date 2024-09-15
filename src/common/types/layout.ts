import { ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
}

export interface IThemeContextProps {
  theme: ITheme;
  toggleTheme: () => void;
}

export interface IThemeProviderProps {
  children: ReactNode;
}

export interface ITheme {
  colors: {
    default: string;
    primary: string;
    background: string;
    secondaryBackground: string;
    textSecondary: string;
    textAccent: string;
    backgroundAbout: string;
    backgroundBlack:string;
  };
  fonts: {
    main: string;
  };
}