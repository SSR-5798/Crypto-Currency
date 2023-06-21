import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://coinranking1.p.rapidapi.com";

const cryptoApiHeaders = {
  "content-type": "application/octet-stream",
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers:cryptoApiHeaders});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCrytopsDetail : builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptosHistory : builder.query({
      query: ({ coinId, timeperiod}) => createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`)
    }),
  })
});

export const { useGetCryptosQuery, useGetCrytopsDetailQuery, useGetCryptosHistoryQuery } = cryptoApi; //destructuring