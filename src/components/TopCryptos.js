import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CryptoCard from "./CryptoCard";

const TopCryptos = () => {
  return (
    <>
      <Box className="home-heading-container">
        <Typography variant="h4">Top 10 CryptoCurrencies in the world</Typography>
        <Typography variant="h5"><Link to="/cryptocurrencies">Show More</Link></Typography>
      </Box>
      <CryptoCard />
    </>
  );
};

export default TopCryptos;
