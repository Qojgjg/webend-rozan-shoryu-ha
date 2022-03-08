const githubIcon = require("../../assets/images/github.svg")
const discordIcon = require("../../assets/images/discord.svg")
const twitterIcon = require("../../assets/images/twitter.svg")

export const langOpts = [
  {
    id: 1,
    langName: "English",
    code: "en",
    nativeName: "English",
  },
  {
    id: 2,
    langName: "Thai",
    code: "th",
    nativeName: "ไทย",
  },
  {
    id: 3,
    langName: "Chinese (Simplified)",
    code: "zh-CN",
    nativeName: "中文（简体)",
  },
]

export const metaMenu = [
  {
    id: 1,
    name: "whitepaper",
    path: "/whitepaper",
  },
  {
    id: 2,
    name: "creatorsportal",
    path: "/creatorsportal",
  },
  {
    id: 3,
    name: "wiki",
    path: "/wiki",
  },
]

export const metaChannal = [
  {
    id: 1,
    name: "Git",
    icon: githubIcon,
    link: "https://github.com/paritytech/polkadot",
  },
  {
    id: 2,
    name: "Discord",
    icon: discordIcon,
    link: "https://discord.com/invite/wGUDt2p",
  },
  {
    id: 3,
    name: "Twitter",
    icon: twitterIcon,
    link: "https://twitter.com/Polkadot",
  }
]

export const menu = [
  {
    id: 1,
    type: "menu",
    name: "explore",
    list: [
      {
        name: "allnfts",
        path: "/all",
      },
      {
        name: "arts",
        path: "/arts",
      },
    ]
  },
  {
    id: 2,
    type: "menu",
    name: "stats",
    list: [
      {
        name: "rankings",
        path: "/rankings",
      },
      {
        name: "activity",
        path: "/activity",
      },
    ]
  },
  {
    id: 3,
    type: "menu",
    name: "resources",
    list: [
      {
        name: "news",
        path: "/news",
      },
      {
        name: "community",
        path: "/community",
      },
      {
        name: "about",
        path: "/about",
      },
      {
        name: "helps",
        path: "/hc",
      },
    ]
  },
  {
    id: 4,
    type: "button",
    name: "create",
    path: "/create",
  }
]
