import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'; 
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; // or { store } if you're using named export
import StoreContextProvider from "./context/StoreContext"; // ✅ this is important

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <StoreContextProvider> {/* ✅ wrap here */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreContextProvider>
    </Provider>
  </React.StrictMode>
);
