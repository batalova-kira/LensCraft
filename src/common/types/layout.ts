
export interface IThemeContextProps {
  theme: ITheme;
  toggleTheme: () => void;
}

export interface ITheme {
  colors: {
    primary: string;
    background: string;
    secondaryBackground: string;
    text: string;
    border: string;
  };
  fonts: {
    main: string;
  };
}