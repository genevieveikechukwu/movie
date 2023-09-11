import { Layout, Space,} from 'antd';

const { Sider, Content } = Layout;

 function SideBar() {
  return (
    <>
          <Sider style={{ color: "#CCCCCC", height:"100vh"}} breakpoint="lg" collapsedWidth="0">
              <Space direction="vertical" size="middle" style={{ fontSize: 20, paddingLeft: 10 }}>
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
    </>
  );
}
export default SideBar