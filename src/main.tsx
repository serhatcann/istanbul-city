import ReactDOM from 'react-dom/client';
import App from './App';

import { createGlobalStyle } from 'styled-components';
import React from 'react';

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  p {
    margin: 0;
  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.Fragment>
		<GlobalStyling />
		<App />
	</React.Fragment>,
);
