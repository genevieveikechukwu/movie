import {useState, useEffect} from 'react'
import { Layout, Menu, Avatar, Space, Input, Table } from 'antd';
const {Search }=Input;
const { Header, Sider, Content} = Layout;
import { SettingOutlined,} from '@ant-design/icons';
import { BsFillHouseAddFill, BsEmojiFrownFill } from 'react-icons/bs';
import { IoMdListBox,} from 'react-icons/io';
import { MdNotificationsNone } from 'react-icons/md';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { BiLocationPlus } from 'react-icons/bi';
import './styles/dashboard.css';
import {data} from './utils.ts'
function App() {

  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const maxWidth = 1024;
useEffect(()=>{
  const updateDeviceWidth = ()=>{
    setDeviceWidth(window.innerWidth);
  }

  window.addEventListener('resize', updateDeviceWidth);

  return ()=>{
    window.removeEventListener('resize', updateDeviceWidth);
  }
},[])
  return (
    <>
      {deviceWidth <= maxWidth ? (<div className="mobile">
        <h1>This site is only visible on Large screens <BsEmojiFrownFill style={{ color:"#4a340a", fontWeight: "bold", display: "inline"}} /> !</h1>
          </div>) : (  
      <Layout className='container hidden lg:block'>

        <Header style={{backgroundColor: "white",}}>
        <div className='menu-container' style={{display:"flex", justifyContent:"space-between"}}>
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
                <Avatar src="/michael-dam-mEZ3PoFGs_k-unsplash.jpg"/>
                Ann Lee
                </Space>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Layout>
          <Sider style={{color: "#CCCCCC",}} breakpoint="lg" collapsedWidth="0">
            <Space direction="vertical" size="middle" style={{fontSize: 20, paddingLeft: 10}}>
              <div></div>
              Overview
              <div></div>
              <Content>
                <Space direction="vertical" size="large">
                  <div className='overview'>
                    <div>Orders Today</div>
                    <div>250</div>
                  </div>
                  <div className='overview'>
                    <div>Pending Orders</div>
                    <div>09</div>
                  </div>
                  <div className='overview'>
                    <div>Delivered Orders</div>
                    <div>129</div>
                  </div>
                  <div className='overview'>
                    <div>Cancelled Orders</div>
                    <div>20</div>
                  </div>
                </Space>
              </Content>
            </Space>

          </Sider>
          <Content>
            <Layout>
              <Search placeholder="search stocks" style={{ width: 304, margin: "auto", marginTop: 10}}  enterButton />
            </Layout>
            <Layout style={{marginTop: 8, marginLeft:5}}>
              <Table columns={[
                {
                  title: 'Product Code',
                  dataIndex: 'product',
                 
                },
                {
                  title: 'Product',
                  dataIndex: 'product',
                },
                {
                  title: 'Instructions',
                  dataIndex: 'instruction',
                },
                {
                  title: 'Status',
                  dataIndex: 'status',
                },
                {
                  title: 'Date',
                  dataIndex: 'date',
                  filters: []
                },
                {
                  title: 'Quantity',
                  dataIndex: 'quantity'
                },
              ]}
              dataSource={data}
              size='middle'
              style={{padding: 5}}
              />
            </Layout>
          </Content>
        </Layout>
      </Layout>
      )}
    </>
  )
}

export default App
