import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const { Header } = Layout;
import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useLoginStore } from "../../stores/loginStateStore.js";
import { useSettingsStore } from "../../stores/settingsStore.js";

function Navbar() {
  const navigate = useNavigate();
  const logout = useLoginStore((store) => store.logout);

  const { t } = useTranslation();

  const { changeLanguage } = useSettingsStore();

  const languages = {
    "en-US": "English",
    "ar-IQ": "Arabic",
    "ku-Arab": "Kurdish",
  };

  const renderDropdown = () => (
    <Menu>
      {Object.entries(languages).map(([languageKey, languageLabel]) => (
        <Menu.Item
          key={languageKey}
          onClick={() => changeLanguage(languageKey)}
        >
          {t(languageLabel)}
        </Menu.Item>
      ))}
    </Menu>
  );

  const HandleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex py-4 gap-4 px-6 border-b border-border ">
      <>
        <div>
          <Link to="/form">{t("Form")}</Link>
        </div>{" "}
        <div>
          <Link to="/responses">{t("Responses")}</Link>
        </div>{" "}
        <button onClick={HandleLogout}>{t("Log out")}</button>
      </>

      <Dropdown overlay={renderDropdown} className="ml-auto">
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {t("Select a language")}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </header>
  );
}

export default Navbar;
