import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import "./i18next/i18next.js";
import { BrowserRouter } from "react-router-dom";
import { useSettingsStore } from "./stores/settingsStore.ts";

const AppWrapper = () => {
  const { direction } = useSettingsStore();

  return (
    <div dir={direction}>
      <App />
    </div>
  );
};
const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);
