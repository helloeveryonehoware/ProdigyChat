// This is the port Typsnd will run on
var serverPort = "3000";

// The IPs below will recieve admin privlages
var adminIPs = ["localhost"];

// This is the admin icon that shows right next to the admins
var adminIcon = "<i class=\"fa-solid fa-shield\"></i> ";

// booleon that toggles on alt detection
var altDetection = true;

// This boolean below turns on the
// The IPs below wont be able to join the chat
var blacklistedIPs = [];

// The usernames below wont be able to be used unless if they're an admin
var blacklistedUsernames = [];

// This is the greeting message of the new user
var msgGreet = "";

// This is the cooldown when a user sends a message (from 0-9 seconds)
var msgCooldown = "2";

// This boolean toggles if multiple rooms are allowed
var multipleRooms = true;

// This array contains the links for tabs
var tabs = [
  //example tab
  //string 1 is what the button will say
  //string 2 is what the button will link to
  [
    ["<i class=\"fa-brands fa-github\"></i> Github"],
    ["https://github.com/udu3324/Typsnd"]
  ],
  [
    ["<i class=\"fa-brands fa-youtube\"></i> Youtube"],
    ["https://youtube.com"]
  ]
];

// html title
var htmlTitle = "Typsnd";



//filter variables
adminIPs.filter(n => n)
blacklistedIPs.filter(n => n)
blacklistedUsernames.filter(n => n)

msgGreet = msgGreet.replace(/\n/g, "<br/>");

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
  htmlTitle
};
