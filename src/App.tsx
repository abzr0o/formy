import { Toaster } from "react-hot-toast";

import { Route, Routes, Navigate } from "react-router-dom";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import NotFound from "./pages/NotFound";
import { useLoginStore } from "./stores/loginStateStore";
import { useSettingsStore } from "./stores/settingsStore";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Main from "./Layouts/Main";
import Form from "./pages/Form";
import Responses from "./pages/Responses/Responses";

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
      <Routes>
        {isLoggedIn ? (
          <>
            <Route element={<Main />}>
              <Route path="/" element={<Navigate to="/form" />} />
              <Route path="/login" element={<Navigate to="/form" />} />
              <Route path="/form" element={<Form />} />
              <Route path="/responses" element={<Responses />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>

      <Toaster />
    </>
  );
}
export default App;
