// document.querySelectorAll('.key').forEach((key) => {
//         key.add
//     //  })

let recording = false;
let playing = false;

let notesEnregistrer = [];

window.addEventListener("keydown", handleKeyDownAudio);
window.addEventListener("keyup", handleKeyup);
window.addEventListener("keydown", handleKeyDownRecord);
// window.addEventListener("keydown", handleKeyDownPlay);

function handleKeyDownAudio(event) {
  if (event.repeat) {
    return;
  }
  // console.log(event.keyCode);
  if (event.keyCode !== 82 && event.keyCode !== 80) {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();

    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.add("playing");

    if (recording === true) {
      notesEnregistrer.push(event.keyCode);
      console.log(notesEnregistrer);
    }
  }
}



function handleKeyup(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!key) return;

  if (event.keyCode !== 82) {
    key.classList.remove("playing");
  }
}

let count = 0;

function handleKeyDownRecord(event) {
  if (event.keyCode === 82) {
    let key = document.querySelector(`.key[data-key="82"]`);
    key.classList.toggle("playing");
    recording = !recording;
    notesEnregistrer = []
  }
}

// function handleKeyDownPlay(event) {
//   if (event.keyCode == "80") {
//     let key = document.querySelector(`.key[data-key="80"]`);
//     key.classList.toggle("playing");
//     setTimeout(() => {
//       key.classList.remove("playing");
//     }, 200);
//   }
// }
