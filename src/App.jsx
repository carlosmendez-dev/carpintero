import './App.css'
import * as React from "react";

import SidebarMenu from './components/SidebarMenu';
import BottomBar from './components/BottomBar';
import Navbar from './components/Navbar';

// vistas
import Home from './pages/Home';
import Search from './pages/Search';
import Account from './pages/Account';
import EditAccount from './pages/EditAccount';import { InputAdornment } from '@mui/material';
import Liked from './pages/Liked';

function App() {

  const [selectedView,setView] = React.useState(0);
  const [SidebarMenuOpen, setSidebarMenuOpen] = React.useState(false);
  const [Title,setTitle] = React.useState("Home")

  const renderView = () =>{
    switch(selectedView){
      case 0: return <Home setTitle={setTitle}/>;
      case 1: return <Search setTitle={setTitle} />;
      case 2: return <Liked setTitle={setTitle}></Liked>;
      case 3: return <Account setView={setView} setTitle={setTitle}></Account>;
      case 4: return <EditAccount setTitle={setTitle} setview={setView}></EditAccount>;
      default: return <div>default</div>;
    }
  }

  return (
    <div className='bg-slate-50 h-dvh flex flex-col'>

    <SidebarMenu open={SidebarMenuOpen} setOpen={setSidebarMenuOpen}></SidebarMenu>
    <Navbar setSidebarMenuOpen={setSidebarMenuOpen} title={Title}></Navbar>



    <div className='grow bg-slate-100 overflow-y-auto'>
        {renderView()}
    </div>



    <BottomBar selectedView={selectedView} setView={setView}></BottomBar>
    </div>
  )
}

export default App
