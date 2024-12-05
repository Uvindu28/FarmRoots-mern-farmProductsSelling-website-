import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TranslationProvider } from 'react-google-multi-lang';
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";
import App from "./App.jsx";
import global_eng from "./components/translations/eng/global.json";
import global_sin from "./components/translations/sin/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false }, 
  lng: "eng", 
  fallbackLng: "eng", 
  resources: {
    eng: {
      global: global_eng, 
    },
    sin: {
      global: global_sin, 
    },
  },
});



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store= {store}>
    <TranslationProvider apiKey={import.meta.env.VITE_TRANSLATION_API} defaultLanguage="en">
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
      </I18nextProvider>
    </TranslationProvider>
    </Provider>
    
  </StrictMode>
);
