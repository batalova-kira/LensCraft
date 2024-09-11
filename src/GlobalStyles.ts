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
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${(p) => p.theme.colors.background};
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`