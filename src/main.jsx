import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18next/i18next.js';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from "react-router-dom";
import { useSettingsStore } from './stores/settingsStore.js';


const AppWrapper = () => {

  const { direction } = useSettingsStore();

  return (
    <ConfigProvider direction={direction}>
      <App />
    </ConfigProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </ConfigProvider>
);
