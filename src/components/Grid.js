import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import millify from "millify";

const Grid = ({ cryptoData }) => (
  <Grid2 container spacing={3} sx={{border:"1px solid white", borderRadius:"30px", p:2, fontFamily:"Bree Serif", letterSpacing:"0.9px", fontSize:"20px"}}>
  
    <Grid2 xs={12} sm={6}>
      <div style={{opacity:0.9}}>Total CryptoCurrencies</div>
      <div fontWeight="bolder">{cryptoData?.data?.stats?.total.toLocaleString()}</div>
    </Grid2>

    <Grid2 xs={12} sm={6}>
      <div style={{opacity:0.9}}>Total Exchanges</div>
      <div fontWeight="bolder">{cryptoData?.data?.stats?.totalExchanges}</div>
    </Grid2>

    <Grid2 xs={12} sm={6}>
      <div style={{opacity:0.9}}>Total Market Cap</div>
      <div fontWeight="bolder">{millify(cryptoData?.data?.stats?.totalMarketCap)}</div>
    </Grid2>

    <Grid2 xs={12} sm={6}>
      <div style={{opacity:0.9}}>Total 24h Volume</div>
      <div fontWeight="bolder">{millify(cryptoData?.data?.stats?.total24hVolume)}</div>
    </Grid2>

    <Grid2 xs={12} sm={6}>
      <div style={{opacity:0.9}}>Total Markets</div>
      <div fontWeight="bolder">{millify(cryptoData?.data?.stats?.totalMarkets)}</div>
    </Grid2>
  </Grid2>
);

export default Grid;