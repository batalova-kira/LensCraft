import { useMemo, useState } from "react";
import { ITheme, IThemeProviderProps } from "../common/types/layout";
import {
    ThemeProvider as StyledThemeProvider,
    ThemeContext,
} from "styled-components";
import { GlobalStyle } from "../GlobalStyles";
import { darkTheme, lightTheme } from "./themes";

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
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
