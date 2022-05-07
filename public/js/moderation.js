/* eslint-disable no-undef */

const $cooldownSetButton = document.querySelector("#set-cooldown-button");
const $cooldownInput = document.querySelector("#cooldown-input");
const $cooldownUpButton = document.querySelector("#cooldown-up-button");
const $cooldownDownButton = document.querySelector("#cooldown-down-button");

const $kickUserInput = document.querySelector("#kick-user-input");
const $kickUserButton = document.querySelector("#kick-user-button");

const $banUserInput = document.querySelector("#ban-user-input");
const $banUserButton = document.querySelector("#ban-user-button");

const $unbanUserInput = document.querySelector("#unban-user-input");
const $unbanUserButton = document.querySelector("#unban-user-button");

$cooldownUpButton.addEventListener("click", function () {
  if (messageCooldown != 9) {
    messageCooldown++;
    $cooldownInput.value = `${messageCooldown}`;
  }
});

$cooldownDownButton.addEventListener("click", function () {
  if (messageCooldown != 0) {
    messageCooldown--;
    $cooldownInput.value = `${messageCooldown}`;
  }
});

$cooldownSetButton.addEventListener("click", function () {
  var setCooldownTo = $cooldownInput.value;
  console.log("Cooldown button has been clicked on with a set value of " + setCooldownTo);
  socket.emit("setCooldown", setCooldownTo, error => {
    if (error) {
      alert(error);
      location.href = "/";
    }
  });
});




$kickUserButton.addEventListener("click", kickUser);
$kickUserInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) { //13 = enter
    event.preventDefault();
    kickUser()
  }
});
function kickUser() {
  if ($kickUserInput.value === "") {
    window.alert("You need a username! It can't be empty.");
  } else {
    // send msg alerting change of username
    var kickingUsername = $kickUserInput.value
    socket.emit("kickUser", kickingUsername, error => {
      if (error === "bad") {
        window.location.reload();
        return console.log(error);
      } else if (error === "notExistingUser") {
        setTimeout(function () { alert("The user you tried to kick doesn't exist!"); }, 1);
      } else if (error === "isAdmin") {
        setTimeout(function () { alert("The user you tried to kick is a admin!"); }, 1);
      } else {
        setTimeout(function () { alert("Sucessfully kicked the user."); }, 1);
        console.log("Kicked user successfuly.");
      }
    });
    $kickUserInput.value = "";
  }
}




$banUserButton.addEventListener("click", banUser);
$banUserInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) { //13 = enter
    event.preventDefault();
    banUser()
  }
});
function banUser() {
  if ($banUserInput.value === "") {
    window.alert("You need a username! It can't be empty.");
  } else {
    var banningUsername = $banUserInput.value

    socket.emit("banUser", banningUsername, error => {
      if (error === "bad") {
        window.location.reload();
        return console.log(error);
      } else if (error === "notExistingUser") {
        setTimeout(function () { alert("The user you tried to ban doesn't exist!"); }, 1);
      } else if (error === "isAdmin") {
        setTimeout(function () { alert("The user you tried to ban is a admin!"); }, 1);
      } else {
        setTimeout(function () { alert("Sucessfully banned the user."); }, 1);
        console.log("Banned user successfuly.");
      }
    });
    $banUserInput.value = "";
  }
}

$unbanUserButton.addEventListener("click", unbanUser);
$unbanUserInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) { //13 = enter
    event.preventDefault();
    unbanUser()
  }
});
function unbanUser() {
  if ($unbanUserInput.value === "") {
    window.alert("You need a username! It can't be empty.");
  } else {
    var unbanningUsername = $unbanUserInput.value

    socket.emit("unbanUser", unbanningUsername, error => {
      if (error === "bad") {
        window.location.reload();
        return console.log(error);
      } else if (error.includes("User provided was invalid.")) {
        setTimeout(function () { alert(error); }, 1);
      } else {
        setTimeout(function () { alert("Sucessfully unbanned the user."); }, 1);
        console.log("Unbanned user successfuly.");
        console.log(error[0]);
      }
    });
    $unbanUserInput.value = "";
  }
}
