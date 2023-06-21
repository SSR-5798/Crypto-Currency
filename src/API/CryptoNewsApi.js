import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const newsHeaderSet = {
    'content-type': 'application/octet-stream',
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const createRequest = (url) => ({url, headers:newsHeaderSet})

export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({
        baseUrl
    }),
    endpoints:(builder) => (
        {
            getCryptoNews: builder.query({
                query: ({selectedCategory, count}) => createRequest(`/news/search?freshness=Day&textFormat=Raw&safeSearch=Off&q=${selectedCategory}&count=${count}`)
            })
        }
    )
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;