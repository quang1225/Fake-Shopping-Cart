import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import App from './App';
import GlobalStyle from './theme/GlobalStyle';
import Theme from './theme/Theme';
import store from './state/store';
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);