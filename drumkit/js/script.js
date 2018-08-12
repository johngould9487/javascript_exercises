document.addEventListener('keydown', (event) => {
  if (["a", "s", "d", "f", "j", "k", "l", ";"].includes(event.key)) {
    let drum = 0;
    let audio = 0;
    if (event.key === "a") {
      drum = document.getElementById('bass');
      audio = document.getElementById('sound-bass');
    } else if (event.key === "s") {
      drum = document.getElementById('snare');
      audio = document.getElementById('sound-snare');
    } else if (event.key === "d") {
      drum = document.getElementById('hi-hat');
      audio = document.getElementById('sound-hi-hat');
    } else if (event.key === "f") {
      drum = document.getElementById('crash');
      audio = document.getElementById('sound-crash');
    } else if (event.key === "j") {
      drum = document.getElementById('ride');
      audio = document.getElementById('sound-ride');
    } else if (event.key === "k") {
      drum = document.getElementById('tom-1');
      audio = document.getElementById('sound-tom-1');
    } else if (event.key === "l") {
      drum = document.getElementById('tom-2');
      audio = document.getElementById('sound-tom-2');
    } else if (event.key === ";") {
      drum = document.getElementById('floor');
      audio = document.getElementById('sound-floor');
    };
    drum.classList.add('active');
    audio.currentTime = 0;
    audio.play();
    document.addEventListener('transitionend', (event) => {
      drum.classList.remove('active');
    });
  };
});
