// Server / Moderation Config
let PRODUCTION = true;
let HTTPS_CHAIN_PATH = "/etc/letsencrypt/live/chat.prodigypnp.com/fullchain.pem"
let HTTPS_KEY_PATH = "/etc/letsencrypt/live/chat.prodigypnp.com/privkey.pem"
let serverPort = 8443;
let adminIPs = ["localhost"];
let adminIcon = `<i class="fa-solid fa-shield"></i>`;
let botIcon = `<i class="fa-solid fa-keyboard"></i>`;
let altDetection = true;
let msgCooldown = "1";

// Filter is not case sensitive & doesn't apply to admins
let blacklistedUsernames = ["admin", "mod", "moderator", "staff", "server", "typsnd", "code", "system", "prodigypnp", "prodigy", "prodigyx", "vido", "gemsvido"];
let blacklistedIPs = [];

// Chat Addons / Functionality
let htmlTitle = "ProdigyPNP Chat";
let msgGreet = "Welcome to the chat exclusive for ProdigyPNP users!";
let multipleRooms = true;
let tabs = [
  //example tabs
  [
    [`<i class="fa-brands fa-discord"></i> Discord`],
    [`https://dsc.gg/prodigypnp`]
  ],
  [
    [`<i class="fa-brands fa-github"></i> Github`],
    [`https://github.com/ProdigyPNP`]
  ],
  [
    [`<i class="fa-brands fa-youtube"></i> Youtube`],
    [`https://www.youtube.com/channel/UC9Q8ocvTML4jKYWbNbQHrGw`]
  ],
  [
    [`<i class="fa-solid fa-newspaper"></i> License`],
    [`https://github.com/ProdigyPNP/ProdigyChat/blob/master/LICENCE.md`]
  ]
];

//filter letiables
adminIPs = adminIPs.filter(n => n)
blacklistedIPs = blacklistedIPs.filter(n => n)
blacklistedUsernames = blacklistedUsernames.filter(n => n)
msgGreet = msgGreet.replace(/\n/g, "<br/>");
adminIcon += " " //important
botIcon += " " //important
if (msgGreet.length >= 1)
  msgGreet = "<br/>" + msgGreet
console.log(adminIPs.toString())

module.exports = {
  HTTPS_CHAIN_PATH,
  HTTPS_KEY_PATH,
  serverPort,
  adminIPs,
  adminIcon,
  altDetection,
  blacklistedIPs,
  blacklistedUsernames,
  msgGreet,
  msgCooldown,
  multipleRooms,
  tabs,
  htmlTitle,
  botIcon
};
