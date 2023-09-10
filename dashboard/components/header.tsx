import { Layout, Menu, Avatar, Space, } from 'antd';
const { Header, } = Layout;
import { SettingOutlined, } from '@ant-design/icons';
import { BsFillHouseAddFill, } from 'react-icons/bs';
import { IoMdListBox, } from 'react-icons/io';
import { MdNotificationsNone } from 'react-icons/md';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { BiLocationPlus } from 'react-icons/bi';
export default function HeaderMenu () {
  return (
    <>
          <Header style={{ backgroundColor: "white", }}>
              <div className='menu-container' style={{ display: "flex", justifyContent: "space-between" }}>
                  <Menu theme="light" mode="horizontal" defaultSelectedKeys={['home']}>
                      <Menu.Item key="home" icon={<BsFillHouseAddFill />} >
                          In stock
                      </Menu.Item>
                      <Menu.Item key="profile" icon={<IoMdListBox />}>
                          Order
                      </Menu.Item>
                      <Menu.Item key="tracking" icon={<BiLocationPlus />}>
                          Order Tracking
                      </Menu.Item>
                      <Menu.Item key="analytics" icon={< IoAnalyticsOutline />}>
                          Analytics
                      </Menu.Item>
                      <Menu.Item key="settings" icon={<SettingOutlined />}>
                          Settings
                      </Menu.Item>
                  </Menu>
                  <Menu theme="light" mode="horizontal">
                      <Menu.Item key="notification" icon={<MdNotificationsNone />}>
                      </Menu.Item>
                      <Menu.Item key="avatar">
                          <Space size={'small'}>
                              <Avatar src="/michael-dam-mEZ3PoFGs_k-unsplash.jpg" />
                              Ann Lee
                          </Space>
                      </Menu.Item>
                  </Menu>
              </div>
          </Header>
    </>
  );
}
