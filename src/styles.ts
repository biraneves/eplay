import { createGlobalStyle } from 'styled-components';

export const colors = {
  black: '#111',
  gray: '#333',
  green: '#10ac84',
  lightGray: '#a3a3a3',
  white: '#eee',
};

export const breakpoints = {
  tablet: '1023px',
  smartphone: '767px',
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style-type: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;

    @media screen and (max-width: ${breakpoints.tablet}) {
      max-width: 80%;
    }
  }
`;
