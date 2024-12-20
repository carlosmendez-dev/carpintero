import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import {supabase}  from '../supabase/client';

export default function SidebarMenu({open,setOpen,setView}) {
  const navegate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function showAbout(){
    setView(7)
  }

  const logout = async () =>{
    let { error } = await supabase.auth.signOut();
    navegate("/carpintero/login");
    const metaTagColorTheme = document.querySelector("meta[name='theme-color']");
        if (metaTagColorTheme){
            metaTagColorTheme.setAttribute("content","white");
        }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Ajustes',"Acerca de"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={showAbout}>
              <ListItemIcon>
                {index % 2 === 0 ? <SettingsIcon /> : <InfoIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider></Divider>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={logout}>
            <ListItemIcon><ExitToApp></ExitToApp></ListItemIcon>
            <ListItemText>Cerrar Sesion</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
