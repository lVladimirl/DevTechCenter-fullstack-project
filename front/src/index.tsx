import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/global";
import store from "./store/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <GlobalStyle />
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
