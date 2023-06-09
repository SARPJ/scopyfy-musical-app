console.log("welcome to scopyfy");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("Baby Shark Dance-(Pagalworld.network).mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogressbanner = document.getElementById("myprogressbanner");
let gif = document.getElementById("gif");

let songs = [
  {
    songName: "salam-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
];

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbanner.value = progress;
});

myprogressbanner.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbanner.value * audioElement.duration) / 100;
});
