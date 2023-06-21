import React from 'react'
import { useGetCryptosQuery } from '../API/cryptoApi';
import ExchangeTable from '../components/ExchangeTable';
import Loader from '../components/Loader';

const Exchanges = () => {

  const { data, isFetching } = useGetCryptosQuery(150);
  const exchangeCoins = data?.data?.coins;


  if(isFetching) return <Loader/>

  return (
    <ExchangeTable coins={exchangeCoins}/>
  )
}

export default Exchanges;