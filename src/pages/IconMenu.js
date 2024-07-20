import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentPaste from '@mui/icons-material/ContentPaste';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styled from 'styled-components';

let PostBtn = styled.button`
  width: 150px;
  border: none;
  border-radius: 10px
  padding: 10px;
  background: 	#1DA1F2;
  color: white;
`

function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <HomeOutlinedIcon />
          <ListItemText>Home</ListItemText>
        </MenuItem>
        <MenuItem>
          <SearchIcon />
          <ListItemText>Explore</ListItemText>
        </MenuItem>
        <MenuItem>
          <MailOutlineIcon />
          <ListItemText>Messages</ListItemText>
        </MenuItem>
        <MenuItem>
          <BookmarkBorderIcon />
          <ListItemText>Bookmarks</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Premium</ListItemText>
        </MenuItem>
        <MenuItem>
          <PersonOutlineIcon />
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <MoreHorizIcon />
          <ListItemText>More</ListItemText>
        </MenuItem>
        <PostBtn>Post</PostBtn>
      </MenuList>
    </Paper>
  );
}


export default IconMenu;