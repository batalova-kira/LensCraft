import { ITheme } from "../common/types/layout";

export const lightTheme: ITheme = {
    colors: {
        default:"#131613",
        primary: "#db574d",
        background: "#fff",
        secondaryBackground: "rgba(255,255,255,0.5)",
        textSecondary: "#131613",
        textContrast: "#E6E6E6",
        textAccent: '#5a5c5a',
        backgroundAbout: "#0E0F0E",
        backgroundBlack:'#292929',
        borderAccent: '#575957',
        blackFilter:"rgba(0, 0, 0, 0.5)",
    },
    fonts: {
        main: "Arial, sans-serif",
    },
};

export const darkTheme: ITheme = {
    colors: {
        default:"#fff",
        primary: "#db574d",
        background: "#131613",
        secondaryBackground: "rgba(255,255,255,0.5)",
        textSecondary: "#e6e6e6",
        textContrast: "#E6E6E6",
        textAccent: '#5a5c5a',
        backgroundAbout: "#0E0F0E",
        backgroundBlack:'#131613',
        borderAccent: '#575957',
        blackFilter:"rgba(0, 0, 0, 0.5)",
    },
    fonts: {
        main: "Arial, sans-serif",
    },
};