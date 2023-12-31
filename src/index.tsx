import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        </BrowserRouter>
  </Provider>
);
