import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/RootReducer";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
