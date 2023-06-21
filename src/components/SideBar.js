import React from "react";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Home, Paid, LightbulbOutlined, CurrencyExchangeOutlined } from "@mui/icons-material";

const sideBarDetails = [
  { name: "Home", path:"/", icon: <Home/> },
  { name: "CryptoCurrencies", path:"/cryptocurrencies", icon: <Paid/> },
  { name: "Exchanges", path:"/exchanges", icon: <CurrencyExchangeOutlined/> },
  { name: "News", path:"/news", icon: <LightbulbOutlined/> },
];

const SideBar = ({ setMenu, size }) => { 

  const clickHandler = () => {
      if(size <= 1200){
         setMenu(e => ({ ...e, menu:false }))
      }
  }

  return (
    <Box padding={2}>
      <Stack>
        {sideBarDetails.map(e => (
          <Link to={e.path} key={e.name}>
            <button className="btn-menu" onClick={clickHandler}>
              <span style={{marginRight: "10px"}}>{e.icon}</span>
              <span>{e.name}</span>
            </button>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default SideBar;
