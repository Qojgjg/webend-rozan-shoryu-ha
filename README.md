#### [docker-lab repo, click!](https://github.com/moretomato/docker-lab)
```
    git clone https://github.com/moretomato/docker-lab

```
_____


#### run brownie container
```
    docker-compose -f docker-compose-web3.yml up -d
    docker-compose -f docker-compose-web3.yml down --remove-orphans
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

พี่ๆ ตอนทํางานบน SSH บน Linux ผมอยากให้ใช้ตัว tmux ในการรัน services นะ เพราะว่า ถ้าไปรันอะไรที่เป็น services นอก working session มันจะไปซํ้ากัน เพราะบางคนอาจจะใช้งานอยู่ในตอนนั้นแต่เราไม่รู้ 

วิธีใช้งานง่ายๆ บน tmux ในตอนนี้แบบเร็วๆ คือ
tmux ls - ลิสต์ตัว session ออกมาดูว่าอะไรบ้างบนเซิร์ฟเวอร์ (ปัจจุบัน ณ วันนี้มีแค่ Session ที่มีชื่อว่า "Web"

tmux a -t "<session>" - attach เข้าไปในหน้า session เพื่อทํางานหรือรัน services บางอย่างและทํางานร่วมกับคนอื่่นได้ เพราะเวลาคนอื่นเขียนคําสั่งเราก็จะเห็นด้วย ณ ตอนนั้นเลย (ปัจจุบันมีแต่ Session "Web" ให้ใช้คําสั่ง tmux a -t "Web" เพื่อเข้า Session)

กด Ctrl + b และกดตัว d - เพื่อ dettach ออกจากหน้า Session ที่เราทํางานอยู่ไปหน้า Linux ปกติที่เราไม่ได้แชร์การทํางานร่วมกับใคร

กด Ctrl + b และลูกศรที่คีย์บอร์ดเพื่อไปใช้งานในอีก Pane (ในปัจจุบันมี 2 Panes ซ้ายกับขวา ถ้าอยากใช้จอซ้ายให้กด Ctrl + b และกดลูกศรซ้าย <- ถ้าอยากใช้จอขวาให้กด Ctrl + b และกดลูกศรขวา)