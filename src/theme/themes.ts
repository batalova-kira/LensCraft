import { ITheme } from "../common/types/layout";

export const lightTheme: ITheme = {
    colors: {
        default:"#131613",
        primary: "#db574d",
        background: "#fff",
        secondaryBackground: "#f3fafb",
        textSecondary: "#131613",
        border: "#eeeeee",
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
        secondaryBackground: "#232323",
        textSecondary: "#e6e6e6",
        border: "#333333",
    },
    fonts: {
        main: "Arial, sans-serif",
    },
};