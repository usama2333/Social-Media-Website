
import { Box, Checkbox, Container } from '@mui/material'
import React, { Fragment } from 'react';
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

import {  ButtonGroup, Stack, TextField } from '@mui/material'

import Tooltip from '@mui/material/Tooltip';
import { Fab } from '@mui/material';
import {Add as AddIcon} from '@mui/icons-material';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import profile11 from '../../assests/images/profile11.jpg';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height : 280,
  bgcolor:'background.default' ,
  color:'text.primary',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius : 5
};

const Post = ({name,cover,profile,date,text}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
          <ShareIcon onClick={handleOpen} />
        </IconButton>
        
      </CardActions>
      
    </Card>
   
    </Box>

      {/* End card 1 */}


      {/* Portal */}


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Typography variant='h6' color='gray' textAlign='center'>
            Share Post 
         </Typography>

         <Box sx={{
            display : 'flex',
            alignItems : 'center',
            gap : '10px',
            mb : '20px'
         }}>
            <Avatar src={profile11} sx={{height : 30 , width : 30}}/>
            <Typography fontWeight={500} variant='span'>
                Usama Ahmed
            </Typography>
        
         </Box>
         <TextField sx={{width : '100%'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
         <Stack direction='row' gap={1} mt={2} mb={3}>
         <FacebookIcon color='primary'/>
         <InstagramIcon color='brown'/>
         <WhatsAppIcon color='success'/>
         <TwitterIcon color='primary'/>
         </Stack>

         <Box>
         <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
      <Button onClick={handleClose}>Share</Button>
      <Button sx={{width : '100px'}}>
        <DateRangeIcon/>
      </Button>
      
    </ButtonGroup>
         </Box>
          
        </Box>
      </Modal>
      {/* Close portal */}
      
    </Fragment>
  )
}

export default Post
