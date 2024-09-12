import { ITheme, IThemeProviderProps } from "../common/types/layout";
import { FC, useState, useMemo } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle } from "../GlobalStyles";
import { darkTheme, lightTheme } from "./themes";
import { ThemeContext } from "../hooks";

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(lightTheme);

    const toggleTheme = useMemo(() => {
        return () => {
            setTheme((prevTheme) =>
                prevTheme === lightTheme ? darkTheme : lightTheme
            );
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
