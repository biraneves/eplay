import { createGlobalStyle } from 'styled-components';

export const cores = {
  branco: '#eee',
  preto: '#111',
  cinza: '#333',
  verde: '#10ac84',
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style-type: none;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branco};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;

  }
`;