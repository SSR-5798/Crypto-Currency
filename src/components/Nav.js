import React, { useEffect, useState } from "react";
import { Stack, Avatar, Typography, Box, Button } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Nav = () => {
 
  const [size, setSize] = useState(null);
  const [menuBarConfig, setMenuBarConfig] = useState({
    menu:true,
    button:false
  })

  useEffect(() => {
    const screenSize = () => setSize(window.innerWidth); // returns width of the screen
    window.addEventListener("resize", screenSize);
    screenSize();

    return () => window.removeEventListener("resize", screenSize);
  }, []);

  useEffect(() => {
    if (size <= 1200) {
      setMenuBarConfig(e => ({ ...e, menu:false, button:true})) 
    } else {
      setMenuBarConfig(e => ({ ...e, menu:true, button:false})) 
    }
  }, [size]);


  const { menu, button } = menuBarConfig;
  const clickHandler = () => setMenuBarConfig(e => ({ ...e, menu:!menu}))
  
  return (
    <Box className="nav-container">
      <Stack direction="row" justifyContent="space-between" className="logo-container">
        <Stack direction="row">
          <Link to="/">
            <Avatar src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" alt="cryto-image" sx={{ mr: "10px" }}/>
          </Link>
          <Typography variant="h4" className="logo"><Link to="/">Cryptoverse</Link> </Typography>
        </Stack>
        {button && <Button className="menu-control-container" onClick={clickHandler}><MenuOutlined/></Button>}
      </Stack>
      {menu && <SideBar setMenu={setMenuBarConfig} size={size}/>}
    </Box>
  );
};

export default Nav;
