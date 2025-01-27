import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/next.js';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import myStore from './Redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Provider store={myStore}>
      < I18nextProvider i18n={i18n}>
        <App />
        <ToastContainer />
      </I18nextProvider>
    </Provider>
  </StrictMode>,
)
