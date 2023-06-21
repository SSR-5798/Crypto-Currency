import React, { useState } from "react";
import CryptoCard from "../components/CryptoCard";
import { Box, TextField } from "@mui/material";

const CrytoCurrencies = () => {

  const [searchText, setSearchText] = useState("");

  return (
    <Box m="30px">
      <div className="search-crypto">
        <TextField id="outlined-basic" label="Search Cryptocurrency" value={searchText} onChange={(e) => (setSearchText(e.target.value))}/>
      </div>
      <CryptoCard simplified filteredText={searchText}/>
    </Box>
  );
};

export default CrytoCurrencies;
