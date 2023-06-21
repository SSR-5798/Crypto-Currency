import React, { useState, useEffect } from "react";
import { Box, Stack, Card, Avatar } from "@mui/material";
import { useGetCryptosQuery } from "../API/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const CryptoCard = ({ simplified, filteredText }) => {

  const count = simplified ? 200 : 10;
  const text = filteredText ? filteredText : "";
  const { data: cryptoData, isFetching } = useGetCryptosQuery(count);

  const [ cryptos, setcryptos] = useState([]);

  useEffect(() => {
    if(!isFetching){
    const filter = cryptoData?.data?.coins.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))
    setcryptos(filter);
  }
          
  }, [cryptoData, text, isFetching]) //color :


  if(isFetching) return <Loader/>

  return (
    <Box className="crypto-card-container">
      <Stack flexWrap="wrap" gap={3} sx={{ flexDirection : { xs: "column", sm:"row"}, justifyContent:{ xs:"center", md:"flex-start"}}}> 

      {cryptos?.map((e) => (
        <Link to={`/crypto/${e.uuid}`} key={e.uuid}>
        <Card className="crypto-card" sx={{borderRadius:"20px", ':hover': {boxShadow: "10px 8px 15px rgba(0, 0, 0, 1)"}}}>
            <Stack direction="row" justifyContent="space-between" sx={{p:"20px", borderBottom:"1px dotted #EDF1D6"}}>
              <h3 className="card-heading">{`${e?.rank}. ${e?.name.substring(0,15)}`}</h3>
              <Avatar className="crypto-image" src={e?.iconUrl}/>
            </Stack>

            <Box className="card-key-info">
                <div variant="subtitle1" mb={1}>Price: $ {millify(parseFloat(e?.price))}</div>
                <div variant="subtitle1" mb={1}>Market Cap: {millify(parseInt(e?.marketCap))}</div>
                <div variant="subtitle1" mb={2}>Daily Change: {`${millify(parseFloat(e?.change))}%`}</div>
            </Box>
        </Card>
        </Link>
        ))}

      </Stack>
    </Box>
  );
};

export default CryptoCard;  
