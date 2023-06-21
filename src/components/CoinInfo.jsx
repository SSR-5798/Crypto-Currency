import React from "react";
import { Box, Stack } from "@mui/material";
import HTMLReactParser from "html-react-parser";

const CoinInfo = ({ coinInfo }) => {
  return (
    <Box className="coin-desc-link">
      <Stack gap="5px" pt="20px" mb="50px">
        <h2>What is {coinInfo.name}</h2>
        <p>{HTMLReactParser(coinInfo.description)}</p>
      </Stack>

      <h3>{coinInfo.name} Links</h3>
      {coinInfo.links.map((e) => (
        <Stack key={e.url} direction="row" justifyContent="space-between" alignItems="center" sx={{p:"20px", borderBottom:"1px solid grey", width:"60%", 
        ":hover":{background:"black"}}}>
           <p className='type'>{e.type}</p>
           <a href={e.url} target="_blank" rel="noreferrer">{e.name}</a>
        </Stack>
      ))}
    </Box>
  );
};

export default CoinInfo;
