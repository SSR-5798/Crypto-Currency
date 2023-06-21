import React, { useState } from "react";
import { Box, Stack, Card, CardMedia, Avatar, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useGetCryptoNewsQuery } from "../API/CryptoNewsApi";
import { useGetCryptosQuery } from "../API/cryptoApi";
import moment from "moment/moment";
import Loader from "../components/Loader";

const News = ({ home }) => {

  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const count = home ? 8 : 18;
  const { data: cryptoNews, isFetching : newsFetching } = useGetCryptoNewsQuery({selectedCategory: newsCategory,count});
  const { data : coinsInfo, isFetching : cryptoCoinsFetching } = useGetCryptosQuery(120);

  const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

  const changeHandler = (event) => {
     setNewsCategory(event.target.value);
  }

  if(newsFetching || cryptoCoinsFetching) return <Loader/>

  return (
    <>
    {!home && <Box className="select-news">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select a Crypto</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Select a Crypto" value={newsCategory} onChange={changeHandler}>
            <MenuItem value="Crytocurrency">Crytocurrency</MenuItem>
              { coinsInfo?.data?.coins.map(e => (
             <MenuItem key={e.uuid} value={e.name}>{e.name}</MenuItem>
               ))}
          </Select>
      </FormControl>
    </Box>}

    <Box className="news-container" margin={!home && "30px"}>
      <Stack flexWrap="wrap" gap={3} sx={{ flexDirection : { xs: "column", sm:"row"}, justifyContent:{ xs:"center", md:"flex-start"}}}>
        {cryptoNews?.value?.map((news) => (
          <Card key={news?.name} sx={{ height: "fit-content", maxWidth:"400px", p:"20px", ":hover":{ boxShadow: "0 -2px 10px rgba(0, 0, 0, 1)", background:"black"} }}>
            <a href={news.url} target="_blank" rel="noreferrer">
              <Stack direction="row" justifyContent="space-between" p="15px" border="1px dashed whitesmoke" borderRadius="20px">
                <p className="news-title">{news?.name}</p>
                <CardMedia image={news?.image?.thumbnail?.contentUrl || demoImage} sx={{ width: "140px", height: "120px" }}/>
              </Stack>

            <p>{news?.description <=180 ? news?.description : `${news?.description.substring(0,180)}...`}</p>
            </a>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row">
                <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="image" sx={{mr:"10px", width:"55px", height:"55px"}}/>
                <span>{news?.provider[0]?.name}</span>
              </Stack>
              <span variant="body2">{moment(news.datePublished).startOf("s").fromNow()}</span>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Box>
    </>
  );
};

export default News;