import React, { FC } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./theme/index.tsx";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

export const Main: FC = () => {
    // const [theme, colorMode] = useMode(); // Використовуємо хук useMode для отримання теми та функції зміни кольорової схеми

    return (
        <React.StrictMode>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );
};

root.render(<Main />);
