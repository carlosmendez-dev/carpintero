import * as React from "react";

import SidebarMenu from '../components/SidebarMenu';
import BottomBar from '../components/BottomBar';
import Navbar from '../components/Navbar';

// vistas
import Home from '../views/Home';
import Search from '../views/Search';
import Account from '../views/Account';
import EditAccount from '../views/EditAccount';
import Liked from '../views/Liked';
import {supabase} from "../supabase/client"
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navegate = useNavigate();
  React.useEffect(()=>{
    const getUser = async ()=>{

      const { data: { user } } = await supabase.auth.getUser();
      if (!user){
        navegate("/carpintero/login");
      }
      console.log(user);
    }

    getUser();
  },[])

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

export default Dashboard
