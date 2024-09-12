import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: 'Sora', sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color: ${(p) => p.theme.colors.default};
  background-color: ${(p) => p.theme.colors.background};

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: ${(p) => p.theme.colors.default};
  text-decoration: inherit;
}

a:hover {
  color: ${(p) => p.theme.colors.primary};
}

body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(p) => p.theme.colors.background};
  }

p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul {
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

button {
    display: flex;
    margin: 0;
    align-items: center;
    font-family: inherit;
    cursor: pointer;

    background: none;
    border: none;
    outline: none;
    padding: 0;
  }

`