import { createGlobalStyle } from 'styled-components';
import 'normalize.css/normalize.css';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 15px;
  }

  * {
    box-sizing: border-box;
  }
  
  body.fontLoaded {
    font-family: ${({ theme }) => theme.font}, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  #react-root {
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-width: 1024px;
  }
`;

export default GlobalStyle;
