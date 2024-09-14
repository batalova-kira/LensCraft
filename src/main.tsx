import React, { FC } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

export const Main: FC = () => {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

root.render(<Main />);
