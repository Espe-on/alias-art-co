import styled, {css} from "styled-components";

const appStyles = css`
body {
  font-family: 'Rambla', sans-serif;
  padding: 20px 60px;
  background-color: $background-color;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

a {
  text-decoration: none;
  color: $alt-color;
}

* {
  box-sizing: border-box;
}
`;

export const AppContainer = styled.div`
${appStyles}
`;