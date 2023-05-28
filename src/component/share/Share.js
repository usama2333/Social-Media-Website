import { Avatar, Box, ButtonGroup, Stack, TextField } from '@mui/material'
import React, { Fragment } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Fab } from '@mui/material';
import {Add as AddIcon} from '@mui/icons-material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import profile11 from '../../assests/images/profile11.jpg';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

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

const Share = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Fragment>
     <Box>
     <Tooltip title="Added" sx={{position : 'fixed' , left : 20, bottom : 20}}>
     <Fab onClick={handleOpen} color='primary' aria-label='add'>
     <AddIcon/>

     </Fab>
    </Tooltip>
    <Box>
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Typography variant='h6' color='gray' textAlign='center'>
            Create Post 
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
         <SentimentSatisfiedAltIcon color='primary'/>
         <PhotoIcon color='secondary'/>
         <VideoCameraBackIcon color='success'/>
         <PersonAddIcon color='error'/>
         </Stack>

         <Box>
         <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
      <Button onClick={handleClose}>Post</Button>
      <Button sx={{width : '100px'}}>
        <DateRangeIcon/>
      </Button>
      
    </ButtonGroup>
         </Box>
          
        </Box>
      </Modal>
    </Box>
     </Box>
      
    </Fragment>
  )
}

export default Share
