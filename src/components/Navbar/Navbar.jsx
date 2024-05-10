import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const { Header } = Layout;
import { Layout, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginStore } from '../../stores/loginStateStore';
import { useSettingsStore } from '../../stores/settingsStore.js';

function Navbar() {
  const isLoggedIn = useLoginStore(store => store.isLoggedIn);

  const navigate = useNavigate();
  const logout = useLoginStore(store => store.logout);


  const { t } = useTranslation();

  const { changeLanguage } = useSettingsStore();

  const languages = {
    'en-US': 'English',
    'ar-IQ': 'Arabic',
    'ku-Arab': 'Kurdish',
  };

  const renderDropdown = () => (
    <Menu>
      {Object.entries(languages).map(([languageKey, languageLabel]) => (
        <Menu.Item key={languageKey} onClick={() => changeLanguage(languageKey)}>
          {t(languageLabel)}
        </Menu.Item>
      ))}
    </Menu>
  );

  const logoutt = () => {
    logout();
    navigate('/login');
  };


  return (
    <Header style={{ display: 'flex', alignItems: 'center', }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['login']}
        style={{ flex: 1, minWidth: 0, float: 'right' }}
      >
        {isLoggedIn ? (<><Menu.Item key={1} >
          <Link to="/form">
            {t('Form')}
          </Link>
        </Menu.Item> <Menu.Item onClick={logoutt} key={2} >

            {t('Log out')}

          </Menu.Item></>) : <Menu.Item key={3}  >
          <Link to="/login">
            {t('Login')}
          </Link>
        </Menu.Item>}
        <Dropdown overlay={renderDropdown}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {t('Select a language')}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Menu>
    </Header>
  );
}

export default Navbar;