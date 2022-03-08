import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../app/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp




// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import { Provider } from 'react-redux';
// import { store } from '../app/store';
// import { Web3ReactProvider } from "@web3-react/core"
// import { Web3Provider } from "@ethersproject/providers"
// import { MoralisProvider } from "react-moralis"

// const getLibrary = (provider: any) => {
//   return new Web3Provider(provider)
// }
// //this need to select network first
// // this need to turn off hot refresh
// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Provider store={store}>
//         <MoralisProvider initializeOnMount={false}>
//           <Web3ReactProvider getLibrary={getLibrary}>
//             <Component {...pageProps} />
//           </Web3ReactProvider>
//         </MoralisProvider>
//       </Provider>
//     </>
//   )
// }

// export default MyApp


