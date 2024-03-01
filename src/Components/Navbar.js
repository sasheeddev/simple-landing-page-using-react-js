import React, { useState } from 'react';
import { BsCart } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BrushIcon from '@mui/icons-material/Brush';
import ChatIcon from '@mui/icons-material/Chat';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//dont know what are bellow
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: < ChatIcon />,
    },
    {
      text: "Contact",
      icon: < PhoneAndroidIcon />,
    },
    {
      text: "Cart",
      icon: < ShoppingCartIcon />,
    },
  ];
  




  return (
    <nav>
      <div></div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonial</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart classname="navbar-cart-icon"/>
        </a>
        <button className="primary-button">Hire Now</button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>





      
    </nav>
    
    
  )
}

export default Navbar

