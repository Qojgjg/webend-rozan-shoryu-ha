### Folder
- *.ws
  - lib
  - asset
    - abi
    - images
    - data
    - remix
  - components
  - feature
  - pages
  - layout
  - type
- studio
- doc
- *env

### create NEXT app
```
npx create-next-app@latest -e with-tailwindcss feature.factory.ws && cd feature.factory.ws

```
##### add dependency
-   basic
```
yarn add @reduxjs/toolkit react-redux react-router-dom @types/react-router-dom @mui/material @mui/styles @emotion/react @emotion/styled axios ethers react-icons 
```
-   web3-react dependency
```
yarn add @web3-react/core @ethersproject/providers @web3-react/injected-connector
```
-   moralis dependency
```
yarn add moralis react-moralis @walletconnect/web3-provider @web3auth/web3auth magic-sdk
```
-   MDX dependency
```
yarn add gray-matter next-mdx-remote tailwindcss postcss autoprefixer @tailwindcss/typography
```
-   Utils dependency
```
yarn add timeago.js socket.io-client ipfs-http-client web3modal @usedapp/core 
```
_____

##### config hotload 
+ edit next.config.js
  
```
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  reactStrictMode: true,
}
```
_____