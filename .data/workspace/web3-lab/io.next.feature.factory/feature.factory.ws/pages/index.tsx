declare var window: any
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Main from "../components/home/Main"
import NFTMarketLayoutOne from "../layout/NFTMarketLayoutOne"
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { languageSet, scrollHeightSet, userLanguage, userScrollHeight } from '../features/usersetup/usersetupSlice';


const pageTitle = "titleOne"
const description = "dont dont read.. what else you know"

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const [preLoading, setPreLoading] = useState((false))
  const [serviceReady, isServiceReady] = useState(false)

  //listion to scroll event
  const handleScroll = () => {
    dispatch(scrollHeightSet(window.scrollY))
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //preLoad
  useEffect(() => {
    isServiceReady(true)
    setPreLoading(false)
  }, [])

  const ServiceUnavailable = () => (
    <p>"service not ready"</p>
  )

  return (
    <div>
      {(serviceReady && !preLoading)
        ? (
          <NFTMarketLayoutOne pageTitle={pageTitle} description={description}>
            <Main />
          </NFTMarketLayoutOne>
        )
        : <ServiceUnavailable />
      }
    </div>

  )
}

export default Home



// import WalletConnectPlain from "../features/wallet/WalletConnectPlain"
// import WalletConnectWeb3React from "../features/wallet/WalletConnectWeb3React"
// import WalletConnectMoralis from "../features/wallet/WalletConnectMoralis"
// import WalletConnectWeb3Modal from "../features/wallet/WalletConnectWeb3Modal"
