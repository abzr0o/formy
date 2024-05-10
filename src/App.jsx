import './App.css';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Form from './pages/Form';
import Test from './pages/Test';
import { Layout } from 'antd';
const { Content } = Layout;
import { Route, Routes, Navigate } from "react-router-dom";
import { useLoginStore } from './stores/loginStateStore';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import { useSettingsStore } from './stores/settingsStore';
import { useTranslation } from 'react-i18next';


function App() {

  const { isLoggedIn } = useLoginStore();
  const { language } = useSettingsStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  return (
    <>

      <Navbar />

      <Content className="container-app" style={{ minHeight: '100vh' }}>

        <Routes>
          {isLoggedIn
            ? <>
              <Route path="/" element={<Navigate to="/form" />} />
              <Route path="/login" element={<Navigate to="/form" />} />
              <Route path="/form" element={<Form />} />
            </>

            : <>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
            </>
          }
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>

      </Content >

      <Toaster />
    </>

  );
}
export default App;
