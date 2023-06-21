import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../API/cryptoApi";
import { cryptoNewsApi } from "../API/CryptoNewsApi";


const store = configureStore({
    reducer:{
       [cryptoApi.reducerPath] : cryptoApi.reducer,
       [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware)
})

export default store;