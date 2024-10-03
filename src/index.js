import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* O Provider acima do App, faz com que todo o conteúdo
    armazenado dentro do App tenha acesso ao 
    armazenamento (store) do reducer  */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
