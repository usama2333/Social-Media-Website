import { ListItemButton,ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React, { Fragment } from 'react'

const ListCom = ({name, icon}) => {
  return (
    <Fragment>
      <ListItem disablePadding>
            <ListItemButton component ='a' href='#home'>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
            <ListItemText primary={name} />
            </ListItemButton>
     </ListItem>
      
    </Fragment>
  )
}

export default ListCom
