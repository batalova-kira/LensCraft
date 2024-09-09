import { createContext, useContext } from "react";
import { AppError } from "../common/errors";
import { IThemeContextProps } from "../common/types/layout";

//Хук створення контексту для зберігання та зміни теми
export const ThemeContext = createContext<IThemeContextProps | undefined>(undefined);

//Хук, який дозволяє компонентам отримувати доступ до значень theme і toggleTheme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(AppError.Wrong_useTheme);
  }
  return context;
};