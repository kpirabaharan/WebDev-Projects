// Handle Button Press

// How to cycle through multiple of same element
var numDrumBtn = document.querySelectorAll('.drum').length;
for (var i = 0; i < numDrumBtn; i++) {
  // addEventListener (1st: click, 2nd: function to be executed (point))
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var btnPressed = this.innerHTML;
    handleClick(btnPressed);
    buttonAnimation(btnPressed);
  });
}

// Handle Keyboard Press

document.addEventListener('keypress', function (event) {
  var keyPress = event.key;
  handleClick(keyPress);
  buttonAnimation(keyPress);
});

// Common Function between Keyboard and Button
function handleClick(inputPress) {
  handleAnimation(inputPress);
  handleAudio(inputPress);
}

// document.querySelector('.' + 'w').classList.add('pressed');
function handleAudio(audioPress) {
  var audio = {
    w: new Audio('sounds/tom-1.mp3'),
    a: new Audio('sounds/tom-2.mp3'),
    s: new Audio('sounds/tom-3.mp3'),
    d: new Audio('sounds/tom-4.mp3'),
    j: new Audio('sounds/snare.mp3'),
    k: new Audio('sounds/crash.mp3'),
    l: new Audio('sounds/kick-bass.mp3'),
  };
  audio[audioPress].play();
}

function handleAnimation(animationPress) {
  var activeButton = document.querySelector('.' + animationPress).classList;
  activeButton.add('pressed');

  setTimeout(function () {
    activeButton.remove('pressed');
  }, 100);
}
