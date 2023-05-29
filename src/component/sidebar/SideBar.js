import { Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { Fragment } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import ListCom from './ListCom';

const data = [
  {
    icon : <HomeIcon/>,
    name : 'Home'
  },
  {
    icon : <ArticleIcon/>,
    name : 'Pages'
  },
  {
    icon : <GroupIcon/>,
    name : 'Groups'
  },
  {
    icon : <StorefrontIcon/>,
    name : 'Market Place'
  },
  {
    icon :  <EmojiPeopleIcon/>,
    name : 'Friends'
  },
  {
    icon : <SettingsIcon/>,
    name : 'Setting'
  },
  {
    icon : <AccountBoxIcon/>,
    name : 'Profile'
  },
]
const SideBar = ({mode , setMode}) => {
  return (
    <Fragment>
  
      <Box flex={1} p={2} sx={{
        display : {xs : 'none' , sm :'block'},
        
      }}>
      <Box sx={{position : 'fixed'}}>
         <List>
         {data.map((data) => (
          <ListCom name={data.name} icon={data.icon}/>
         ))}
         
          <ListItem disablePadding>
            <ListItemButton component ='a' href='#simple-list'>
              <ListItemIcon>
              {mode === 'light'? <LightModeIcon/> : <NightlightIcon/>}
                
                
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')}/>
            </ListItemButton>
          </ListItem>

          </List>
          </Box>
      </Box>
     
    </Fragment>
  )
}

export default SideBar
