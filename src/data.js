module.exports = {
  "title": "atronandbeyond.com",
  "tagline": "Beats and Code",
  "tags": [{
    id: 1,
    name: "Chess",
    enabled: true
  },
  {
    id: 2,
    name: "Beats",
    enabled: true
  },
  {
    id: 3,
    name: "Code",
    enabled: true
  }],
  "articles": [
    {
      title: "Uploading Pgn from the DGT Electronic Chessboard",
      tags: [1],
      date: "2021-06-20",
      content:`The DGT Electronic Chess Board is a sweet little device capable of detecting which squares chess pieces are placed on and 
      sending these positions to software that can reconstruct the game in Pgn or ePgn format.`
    },
    {
      title: "Populate Unity Dropdown from UnityWebRequest",
      tags: [3],
      date: "2021-06-20",
      content:`It's possible to populate the options of a Unity dropdown using the results of a REST request in Unity!  To populate the dropdown 
      we'll need to know a little about the methods on Tmp_Dropdown, Unity event handlers and maybe a bit about the dropdown template.`
    },
    {
      title: "Building a Discord Bot with Discord.js",
      tags: [3],
      date: "2021-06-20",
      content:`If you've used discord you probably know there are discord bots for everything.  There are bots for playing music, gambling, managing roles and 
      about anything else that seems remotely useful.  This is probably because making a discord bot is pretty straightforward using discord.js.
      `
    },
    {
      title: "Checking Out Mc-707 Firmware update 1.72",
      tags: [2],
      date: "2021-06-20",
      content:`The MC-707 is a groovebox and one of Roland's DAWless music creation products.  I don't get this thing out nearly enough but when I do it's always 
      a good time.  Let's check out some of the updates in the newest 1.72 firmware.
      `
    }
    
  ]
}
