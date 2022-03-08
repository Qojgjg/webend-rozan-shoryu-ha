### create NEXT app
```
npx create-next-app@latest -e with-tailwindcss io.joenftmarket && cd io.joenftmarket

yarn add react-icons @sanity/client @3rdweb/hooks @3rdweb/sdk react-hot-toast
yarn add react-icons @sanity/client react-modal @types/react-modal react-spinners @emotion/react ethers 

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

configurate project involved sanity and thirdweb
sanity is db and cms service, need gobal npm package and its user 
to make it work create folder studio and run init
thirdweb is web3 instant contract manager connect it by wallet and deploy whatever you want

##### sanity and thirdweb
https://thirdweb.com/
- connect > create > project > addmodule(marketplace) > addmodule(marketplace)
- mint nft > list

https://www.sanity.io/
- npm install -g @sanity/cli
- signin with Gmail

#### init sanity
- mkdir ./studio
- cd studio
- login via cli google and init with clean project

```
    sanity init --coupon cleverprogrammer
  
```

- start server so we can do job ,default port is 3333, http://localhost:3330

```
sanity start --host=0.0.0.0
sanity start --host=0.0.0.0 --port=3000
```
- go https://www.sanity.io/ > manage project inferface > add CORS 
  - http://localhost:3050 checked Allow credentials 
  - http://localhost:3330 checked Allow credentials 

- go https://www.sanity.io/ > manage project inferface > add apitoken > Permissions EDITOR > copy token
  