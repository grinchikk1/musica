import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/Store";
import ViewModeProvider from "./components/ViewModeProvider";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ViewModeProvider>
      <App />
    </ViewModeProvider>
  </Provider>
);
