import React from "react";
import { Box, Stack, Card } from "@mui/material";
import {
  MonetizationOnOutlined,
  NumbersOutlined,
  BoltOutlined,
  EmojiEventsOutlined,
  BrokenImageOutlined,
  CurrencyExchange,
  CheckOutlined,
  StopOutlined,
  Error,
} from "@mui/icons-material";
import millify from "millify";

const CoinStats = ({ coinInfo, specific }) => {

    const stats = [
        { title: 'Price to USD', value: `$ ${coinInfo?.price && millify(coinInfo?.price)}`, icon: <MonetizationOnOutlined /> },
        { title: 'Rank', value:coinInfo?.rank, icon: <NumbersOutlined /> },
        { title: '24h Volume', value: `$ ${coinInfo?.["24hVolume"] && millify(coinInfo["24hVolume"])}`, icon: <BoltOutlined /> },
        { title: 'Market Cap', value: `$ ${coinInfo?.marketCap && millify(coinInfo?.marketCap)}`, icon: <MonetizationOnOutlined /> },
        { title: 'All-time-high (daily avg.)', value: `$ ${coinInfo?.allTimeHigh?.price && millify(coinInfo.allTimeHigh?.price)}`, icon: <EmojiEventsOutlined /> },
      ];
    
      const genericStats = [
        { title: 'Number Of Markets', value: coinInfo?.numberOfMarkets, icon: <BrokenImageOutlined /> },
        { title: 'Number Of Exchanges', value: coinInfo.numberOfExchanges, icon: <CurrencyExchange /> },
        { title: 'Aprroved Supply', value: coinInfo?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <Error /> },
        { title: 'Total Supply', value: `$ ${coinInfo?.supply?.total && millify(coinInfo?.supply?.total)}`, icon: <Error /> },
        { title: 'Circulating Supply', value: `$ ${coinInfo?.supply?.circulating && millify(coinInfo?.supply?.circulating)}`, icon: <Error /> },
      ];

      const coin = specific ? stats : genericStats;
    
  return (
  <Box>
    <Stack justifyContent="center" alignItems="center" gap="20px" sx={{ p: "20px 0", mb: "20px" }}>
      <h3 className="stats-heading">{`${specific ? coinInfo?.name : "Other"} ${specific ? "Value" : ""} Statistics`}</h3>
      <p className="stats-p">{`An overview showing the stats of ${specific ? coinInfo?.name : "all cryptocurrencies"}`}</p>
      <Box>
        <Stack>
        {coin.map((e) => (
          <Card key={e.title} className="coin-stats">
            <Stack direction="row" justifyContent="space-between">
              <span className="coin-desc">
                {e.icon} {e.title}
              </span>
              <span className="stats">{e.value}</span>
            </Stack>
          </Card>
        ))}
       </Stack>
      </Box>
    </Stack>
  </Box>
  )
};

export default CoinStats;
