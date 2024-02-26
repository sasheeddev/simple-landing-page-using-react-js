import React, { useState } from 'react';
import Logo from "../Assets/Logo.svg";
import { Bscart2 } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
    const [opneMenu,setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>,
        },

        {
            text:"About",
            icon:<InfoIcon/>,
        },

        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>,
        },

        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>,
        },

        {
            text:"Home",
            icon:<HomeIcon/>,
        },

        {
            text:"Home",
            icon:<HomeIcon/>,
        },

        
    ]
  return (
    <div>
        Navbar
      
    </div>
  )
}

export default Navbar
