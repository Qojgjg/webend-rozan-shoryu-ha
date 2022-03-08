import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import TransactionHistory from '../components/info/TransactionHistory'

const style = {
  wrapper: `h-screen max-h-screen min-h-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <TransactionHistory />
    </div>
  )
}

export default Home
