import React, { Fragment } from 'react'
import SideBar from '../sidebar/SideBar'

import RightBar from '../rightbar/RightBar'
import { Stack } from '@mui/material'
import Feed from '../feed/Feed'

const Home = ({mode , setMode}) => {
  return (
    <Fragment>
    <Stack direction='row' spacing={2}>
    <SideBar mode={mode} setMode={setMode}/>
    <Feed/>
    <RightBar/>
    </Stack>
      
    </Fragment>
  )
}

export default Home
