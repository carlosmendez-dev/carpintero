import './App.css'
import * as React from "react";

import SidebarMenu from './components/SidebarMenu';
import Splashscreen from './pages/Splashscreen';
import BottomBar from './components/BottomBar';
import Navbar from './components/Navbar';

// vistas
import Home from './pages/Home';
import Search from './pages/Search';
import Account from './pages/Account';

function App() {

  const [selectedView,setView] = React.useState(0);
  const [SidebarMenuOpen, setSidebarMenuOpen] = React.useState(false);

  const renderView = () =>{
    switch(selectedView){
      case 0: return <Home/>;
      case 1: return <Search/>;
      case 2: return <div>Vista 2</div>;
      case 3: return <Account/>;
      default: return <div>default</div>;
    }
  }

  return (
    <div className='bg-slate-50 h-dvh flex flex-col'>
    <Splashscreen></Splashscreen>
    <SidebarMenu open={SidebarMenuOpen} setOpen={setSidebarMenuOpen}></SidebarMenu>
    <Navbar setSidebarMenuOpen={setSidebarMenuOpen}></Navbar>



    <div className='grow bg-slate-100 overflow-y-auto'>
        {renderView()}
    </div>



    <BottomBar selectedView={selectedView} setView={setView}></BottomBar>
    </div>
  )
}

export default App
