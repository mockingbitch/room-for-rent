import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import App from './App';
import {store} from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import i18n from './translations/i18n';
import { I18nextProvider } from 'react-i18next';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.Fragment>{/* Re-render twice*/}
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <App/>
        </I18nextProvider>
      </PersistGate>
      </React.Fragment>
  </Provider>
);
