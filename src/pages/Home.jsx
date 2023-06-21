import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Grid from "../components/Grid";
import { useGetCryptosQuery } from "../API/cryptoApi";
import TopCryptos from "../components/TopCryptos";
import { News, Loader } from "../components/pages";

const Home = () => {

  const { data: cryptoData, isFetching } = useGetCryptosQuery(10);

  if(isFetching) return <Loader/>;

  return (
    <Box sx={{m:"30px"}}>
      <Typography className="heading" variant="h3" textAlign="center" mb={3}>Global Crypto Stats</Typography>
      <Grid cryptoData={cryptoData}/>
      <TopCryptos/>
      <Box className="home-heading-container">
        <Typography variant="h4">Latest Crypto News</Typography>
        <Typography variant="h5"><Link to="/news">Show More</Link></Typography>
      </Box>
      <News home/>
    </Box>
  );
};

export default Home;
