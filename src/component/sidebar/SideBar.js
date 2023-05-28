import { Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { Fragment } from 'react'

const SideBar = () => {
  return (
    <Fragment>
  
      <Box bgcolor='pink' flex={1} p={2} sx={{
        display : {xs : 'none' , sm :'block'}
      }}>
         <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          </List>
      </Box>
     
    </Fragment>
  )
}

export default SideBar
