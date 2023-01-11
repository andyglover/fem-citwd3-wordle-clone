const letters = document.querySelectorAll(".letter");

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

for (let i = 0; i < letters.length; i++) {
  const newInput = document.createElement("input");
  //   console.log(letters[i]);
  newInput.setAttribute("maxLength", "1");
  letters[i].appendChild(newInput);

  let goodInput;
  newInput.addEventListener("keydown", function (event) {
    if (!goodInput && !isLetter(event.key)) {
      event.preventDefault();
    } else {
      goodInput = true;
    }
  });
  newInput.addEventListener("keyup", function (event) {
    console.log();
    if (goodInput && document.activeElement.parentElement.nextElementSibling) {
      letters[i + 1].firstChild.focus();
      goodInput = false;
    }
  });
  newInput.addEventListener("keypress", function (e) {
    if (
      e.key === "Enter" &&
      document.activeElement.parentElement.parentElement.nextElementSibling
    ) {
      letters[i + 1].firstChild.focus();
      goodInput = false;
    }
  });
}
//TODO implement backspace next.
