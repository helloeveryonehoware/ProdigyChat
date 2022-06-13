// Insert Emoji
$insertEmojiButton.addEventListener("click", function () {
  console.log("Insert Emoji button has been clicked on.");
  if (boolClickedOn) {
    $emojiBox.style.display = "none"
    boolClickedOn = false;
  } else {
    $emojiBox.style.display = "flex"
    boolClickedOn = true;
  }
});

var onEmojiBox = true;
// emoji box
$emojiBox.onmouseover = function () {
  onEmojiBox = false
}
$emojiBox.onmouseout = function () {
  onEmojiBox = true
}

// On Emoji Click
$emojiBox.addEventListener('emoji-click', event => sendEmoji(event.detail));
function sendEmoji(detail) {
  $messageFormInput.value = $messageFormInput.value + detail.unicode;
}
