import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCrytopsDetailQuery } from "../API/cryptoApi";
import { Box, Stack, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { LineChart, CoinStats, CoinInfo, Loader } from "../components/pages";
import millify from "millify";

const CrytoDetails = () => {
  
  const [timeSpan, setTimeSpan] = useState("7d");

  const { coinId } = useParams();
  const { data, isFetching } = useGetCrytopsDetailQuery(coinId);

  const coinInfo = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  if (isFetching) return <Loader/>

  return (
    <Box className="coin-detail-container">

      <Stack justifyContent="center" alignItems="center" gap="10px" sx={{ p: "20px 0", borderBottom: "1px solid var(--border)", mb:"30px" }}>
        <h2 className="coin-name">{coinInfo?.name}</h2>
        <p>{coinInfo?.name} live price in US dollars.View value statistics, market cap and supply.</p>
      </Stack>
       
      <FormControl sx={{minWidth:"250px", mb:"20px"}}>
        <InputLabel id="demo-simple-select-label">Select Time Period</InputLabel>
        <Select 
         value={timeSpan}
         onChange={(e => setTimeSpan(e.target.value))} 
         label="Select Time Period" 
         id="demo-simple-select" 
         labelId="demo-simple-select-label"
         >
         {time.map(e => <MenuItem key={e} value={e}>{e}</MenuItem>)}
        </Select>
      </FormControl>

      <LineChart coinName={coinInfo?.name} coinPrice={millify(coinInfo?.price)} coinId={coinId} timeperiod={timeSpan}/>
      
      <Stack sx={{flexDirection : {xs : "column", xl:"row" }, justifyContent:"space-around", m:"30px 0"}} >
        <CoinStats coinInfo={coinInfo} specific/>
        <CoinStats coinInfo={coinInfo}/>
      </Stack>
      
      <CoinInfo coinInfo={coinInfo} />
    </Box>
  );
};

export default CrytoDetails;
