import { Box, Container } from '@mui/material'
import React, { Fragment } from 'react'

const RightBar = () => {
  return (
    <Fragment>
    
     <Box bgcolor='lightcoral' flex={2} p={2} sx={{
        display : {xs : 'none' , sm :'block'}
      }}>
        right bar
     </Box>
     
    </Fragment>
  )
}

export default RightBar
