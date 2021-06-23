module.exports = {
  "header": {
    "title": "atronandbeyond.com",
    "tagline": "Beats and Code",
  },
  "tags": [{
    id: 1,
    name: "Chess",
    enabled: true,
    icon: '♟️'
  },
  {
    id: 2,
    name: "Beats",
    enabled: true,
    icon:'🎶'
  },
  {
    id: 3,
    name: "Code",
    enabled: true,
    icon:'💻'
  }],
  "articles": [
    {
      enabled: true,
      title: "Reading PGN from the DGT Electronic Chessboard",
      tags: [1],
      date: "2021-06-20",
      content: `The DGT Electronic Chess Board, true to its name, is capable of recording any chess game played on it into internal memory.  
      These games can be input to a chess program like Fritz or just written to disk for archiving and future analysis.  There are a few software 
      titles provided by DGT that are supposed to make interfacing with the DGT easy.  RabbitQueen is helpful for dumping the board memory and configuring   
      a few internal parameters.  RabbitConnect and RabbitPlugin allow you to connect the board to chess programs like Fritz.  
      
      Of the few programs DGT provides, LiveChess is the most interesting title in my opinion.  It is used capture the games produced by multiple DGT boards 
      and write them to either one file or multiple files.  This file is updated as the games progress so it can be processed by anyone who wants to parse it.  
      Lichess is great example of an online chess platform that can read the broadcasted PGN from a live tournament.`
    },
    {
      enabled: true,
      title: "Populate Unity Dropdown from UnityWebRequest",
      tags: [3],
      date: "2021-06-20",
      content: `It's possible to populate the options of a Unity dropdown using the results of a REST request in Unity!  To populate the dropdown 
      we'll need to know a little about the methods on Tmp_Dropdown, Unity event handlers and maybe a bit about the dropdown template.`
    },
    {
      enabled: true,
      title: "Building a Discord Bot with Discord.js",
      tags: [3],
      date: "2021-06-20",
      content: `If you've used discord you probably know there are discord bots for everything.  There are bots for playing music, gambling, managing roles and 
      about anything else that seems remotely useful.  This is probably because making a discord bot is pretty straightforward using discord.js.
      `
    },
    {
      enabled: true,
      title: "Checking Out Mc-707 Firmware update 1.72",
      tags: [2],
      date: "2021-06-20",
      content: `The MC-707 is a groovebox and one of Roland's DAWless music creation products.  I don't get this thing out nearly enough but when I do it's always 
      a good time.  Let's check out some of the updates in the newest 1.72 firmware.
      <a href="https://www.roland.com/global/support/by_product/mc-707/updates_drivers/fe3f083e-fe45-40ff-9a0d-7283771d846f/" target="_blank">UPDATE HISTORY</a>
      `
    }
    ,
    {
      enabled: true,
      title: "Creating a Custom Toolchain for React",
      tags: [3],
      date: "2021-06-20",
      content: `A recent humble bundle for front end development contained the last press of O'Reilly book Learning React.  Although you can run pure React by including react from 
      the CDN, it's common to use a toolchain to bring together a full ecosystems of packages that make developing with React easier. 
      This article is heavily inspired by <a href="https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658"/>this blog post</a>.`
    }
  ]
}
