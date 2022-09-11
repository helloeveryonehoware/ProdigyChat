// Server / Moderation Config
let serverPort = 80;
let adminIPs = ["localhost"];
let adminIcon = `<i class="fa-solid fa-shield"></i>`;
let botIcon = `<i class="fa-solid fa-keyboard"></i>`;
let altDetection = false;
let msgCooldown = "2";
// Filter is not case sensitive & doesn't apply to admins
let blacklistedUsernames = ["admin", "mod", "moderator", "staff", "server", "typsnd", "code", "system", "prodigypnp", "prodigy", "prodigyx", "vido", "gemsvido"];
let blacklistedIPs = [];

// Chat Addons / Functionality
let htmlTitle = "ProdigyPNP Chat";
let msgGreet = "";
let multipleRooms = true;
let tabs = [
  //example tabs
  [
    [`<i class="fa-brands fa-github"></i> Github`],
    [`https://github.com/udu3324/Typsnd`]
  ],
  [
    [`<i class="fa-brands fa-youtube"></i> Youtube`],
    [`https://youtube.com`]
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

module.exports = {
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
