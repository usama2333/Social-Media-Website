import { Box, Container, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import profile1 from "../../assests/images/profile1.png";
import profile2 from "../../assests/images/profile2.png";
import profile3 from "../../assests/images/profile3.png";
import profile4 from "../../assests/images/profile4.png";
import profile5 from "../../assests/images/profile5.png";
import profile11 from "../../assests/images/profile11.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },

];

const RightBar = () => {
  const [num , setNum] = useState(7);

  const openImageHandler = () =>{
    setNum(num === 7 ? 9 : 7)
  }
  return (
    <Fragment>
      <Box
        // bgcolor="lightcoral"
        flex={2}
        p={2}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Box sx={{ position: "fixed" }}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <Box >
            <AvatarGroup onClick={openImageHandler} sx={{mr : '90px'}} max={num}>
              <Avatar alt="Remy Sharp" src={profile1} />
              <Avatar alt="Travis Howard" src={profile2} />
              <Avatar alt="Cindy Baker" src={profile3} />
              <Avatar alt="Agnes Walker" src={profile4} />
              <Avatar alt="Remy Sharp" src={profile5} />
              <Avatar alt="Travis Howard" src={profile11} />
              <Avatar alt="Cindy Baker" src={profile3} />
              <Avatar alt="Agnes Walker" src={profile4} />
              <Avatar alt="Trevor Henderson" src={profile5} />
            </AvatarGroup>
          </Box>
          <Typography variant="h6" fontWeight={100} marginTop={2}>
            Latest photos
          </Typography>

          <Box>
            <ImageList sx={{ width: 350 , height : 120}} cols={3} rowHeight={100}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>

          <Typography variant="h6" fontWeight={100} marginTop={4}>
            Latest Conversations
          </Typography>

           <Box>
           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={profile3} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={profile1} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={profile2} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
           </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default RightBar;
