
import { Box, Checkbox, Container } from '@mui/material'
import React, { Fragment } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import card2 from '../../assests/images/card2.png';
import card3 from '../../assests/images/card3.png';
import card4 from '../../assests/images/card4.png';
import cover from '../../assests/images/cover.jpeg';
import cover2 from '../../assests/images/cover2.jpg';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Post = ({name,cover,profile,date,text}) => {
  return (
    <Fragment>

     {/* Card 1 */}

     <Box sx={{mb : '40px'}}>
    
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'sky-blue'}} aria-label="recipe">
            {profile}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia
        component="img"
        // height="194"
        image={cover}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color : 'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
   
    </Box>

      {/* End card 1 */}
      
    </Fragment>
  )
}

export default Post
