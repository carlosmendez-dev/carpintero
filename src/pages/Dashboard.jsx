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
import {BuildModel}  from "../views/BuildModel";
import { ModelDetail } from "../views/ModelDetail";
import About from "../views/About";

import {supabase} from "../supabase/client"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Dashboard() {

  const [Model,setModel] = React.useState(undefined);

  const [Modelos,setModelos] = React.useState([]);
  
  React.useEffect(()=>{
    axios.get("database.json")
    .then((response)=>{
        setModelos(response.data.models)
    })

    const metaTagColorTheme = document.querySelector("meta[name='theme-color']");
        if (metaTagColorTheme){
            metaTagColorTheme.setAttribute("content","#1976D2");
        }


},[])

  const navegate = useNavigate();
  React.useEffect(()=>{
    const getUser = async ()=>{

      const { data: { user } } = await supabase.auth.getUser();
      if (!user){
        navegate("/carpintero/login");
      }
    }

    getUser();
  },[])

  const [selectedView,setView] = React.useState(0);
  const [SidebarMenuOpen, setSidebarMenuOpen] = React.useState(false);
  const [Title,setTitle] = React.useState("Home")

  const renderView = () =>{
    switch(selectedView){
      case 0: return <Home setTitle={setTitle} setView={setView} modelos={Modelos} setModel={setModel}/>;
      case 1: return <Search setTitle={setTitle} />;
      case 2: return <Liked setTitle={setTitle}></Liked>;
      case 3: return <Account setView={setView} setTitle={setTitle}></Account>;
      case 4: return <EditAccount setTitle={setTitle} setview={setView}></EditAccount>;
      case 5: return <ModelDetail setTitle={setTitle} setView={setView} model={Model}></ModelDetail>;
      case 6: return <BuildModel setTitle={setTitle} setView={setView} model={Model}></BuildModel>;
      case 7: return <About setTitle={setTitle} setView={setView}></About>;
      default: return <div>default</div>;
    }
  }

  return (
    <div className='bg-slate-50 h-dvh flex flex-col'>

    <SidebarMenu open={SidebarMenuOpen} setOpen={setSidebarMenuOpen} setView={setView}></SidebarMenu>
    <Navbar setSidebarMenuOpen={setSidebarMenuOpen} title={Title}></Navbar>



    <div className='grow bg-slate-100 overflow-y-auto'>
        {renderView()}
    </div>



    <BottomBar selectedView={selectedView} setView={setView}></BottomBar>
    </div>
  )
}

export default Dashboard
