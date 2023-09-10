import {useState, useEffect} from 'react'
import { Layout } from 'antd';
import { BsEmojiFrownFill } from 'react-icons/bs';
import HeaderMenu from '../components/header.tsx'
import SideBar from '../components/sidebar.tsx'
import Inventory from '../components/content.tsx'
import './styles/dashboard.css';


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
        <h1>This site is only visible on Large screens <BsEmojiFrownFill style={{ color:"red", fontWeight: "bold", display: "inline"}} /> !</h1>
          </div>) : (  
      <Layout className='container hidden lg:block'>
        <HeaderMenu />
        <Layout>
          <SideBar />
            <Inventory />
        </Layout>
      </Layout>
      )}
    </>
  )
}

export default App
