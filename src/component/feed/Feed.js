import { Box } from "@mui/material"
import { Fragment } from "react"
import Post from "../post/Post"


const Feed = () => {


  return (
    <Fragment>
      <Box flex={4} p={2}>
      
      <Post/>
      <Post/>
      <Post/>
     
        
      </Box>
    </Fragment>
  )
}

export default Feed
