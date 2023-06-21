import React from "react";
import { Stack, Box } from "@mui/material";
import { useGetCryptosHistoryQuery } from "../API/cryptoApi";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Loader from "./Loader";
Chart.register(...registerables);

const LineChart = ({ coinName, coinPrice, coinId, timeperiod }) => {

  const { data : history, isFetching } = useGetCryptosHistoryQuery({ coinId, timeperiod }) 

  if(isFetching) return <Loader/>

  const price = [];
  const coinTimeStamp = [];

  for (const e of history?.data?.history) {
    price.push(e.price);
    coinTimeStamp.push(e.timestamp);
  }

  const data = {
    labels: coinTimeStamp, //X-axis
    datasets: [
      {
        label: "Price in USD",
        data: price, //Y-axis
        fill: false,
        backgroundColor: "#03C4A1",
        borderColor: "#1F4287",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <h3 className="chart-title">{coinName} Price Chart</h3>
        <Stack
          direction="row"
          gap="15px"
          className="chart-heading-current-price"
        >
          <h5>Change: {history?.data?.change}%</h5>
          <h5>Current Bitcoin Price: $ {coinPrice}</h5>
        </Stack>
      </Stack>

      <Line data={data} options={options} />
    </Box>
  );
};

export default LineChart;
