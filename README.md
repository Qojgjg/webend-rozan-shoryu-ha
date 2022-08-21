#### [docker-lab repo, click!](https://github.com/moretomato/docker-lab)
```
    git clone https://github.com/moretomato/docker-lab

```
_____


#### run brownie container
```
    docker-compose -f docker-compose-web3.yml up -d
    docker-compose -f docker-compose-web3.yml down --remove-orphans
    
    docker-compose -f docker-compose-webend.yml up -d
    docker-compose -f docker-compose-webend.yml down --remove-orphans
```

_____

### create NEXT app
```
npx create-next-app@latest --ts io.crypterium.fantasy && cd io.crypterium.fantasy

```

##### add dependency

```
yarn add @reduxjs/toolkit react-redux react-router-dom @types/react-router-dom 
yarn add axios ethers timeago.js socket.io-client ipfs-http-client web3modal @usedapp/core 

<!-- web3-react dependency -->
yarn add @web3-react/core @ethersproject/providers @web3-react/injected-connector
<!-- moralis dependency -->
yarn add moralis react-moralis @walletconnect/web3-provider @web3auth/web3auth magic-sdk
<!-- MDX dependency -->
yarn add gray-matter next-mdx-remote tailwindcss postcss autoprefixer @tailwindcss/typography
```

##### add tailwind
```
yarn add --dev tailwindcss postcss autoprefixer
```

-   run the init command to generate both tailwind.config.js and postcss.config.js
    ```
    npx tailwindcss init -p
    ```
-   add this to tailwind.config.js
    ```
    mode: 'jit',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    ```
-   add this to top of styles/globals.css
    ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    ```
-   add this to index.tsx
    ```
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
    ```
-   Start your build process
    ```
        npm run dev
    ```
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
#### Github Auth
1. profile> setting> account security> enable Two-factor authentication
2. profile> setting> Developer Setting> create personal access token
3. add remote
```
    remote set-url origin <https://[APPLICATION]:[NEW TOKEN]@github.com/[ORGANISATION]/[REPO].git>

```
or
```
    git remote add webend-rozan-shoryu-ha https://github.com/moretomato/webend-rozan-shoryu-ha.git
    git remote add webend-rozan-shoryu-ha https://github.com/timesjoe/webend-rozan-shoryu-ha.git
    git remote rm webend-rozan-shoryu-ha
    git remote -v
```


#### Git basic command
cd web3-project
```
git init
git status
git add .
git commit -m "first commit"
git log
git branch -M web3-project
git branch
git push -u webend-rozan-shoryu-ha web3-project

git branch -a
git checkout web3-project
```
** no large file. thats bring hell to earth
**use personal access token as password in CLI

**window git credentail
-Control Panel\User Accounts\Credential Manager
-delete git or github 

____
#### shell 
```
    ssh -i keys/eighty-nine-amazon-linux-kernel-510.pem  ec2-user@13.214.2.232
    cat /etc/os-release
    systemctl list-units 

    cd nodeproject
    rm -r node_modules/
    rm -r .next/

    ps -e|grep node
    kill -9 16608
    
    npm run dev -- --port 13470

    sudo apt-get install tmux -y
    tmux new -s test 
    tmux ls
    tmux a -t "test" 


```

