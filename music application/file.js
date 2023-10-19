console.log("welcome to scopyfy");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/5.mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogressbanner = document.getElementById("myprogressbanner");
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName("songitem"));
let rightPlay = document.getElementById("rightplay");
let leftPlay = document.getElementById("leftplay");

let songs = [
  {
    songName: "Apni To Jaise Taise",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "Jalabi Bai",
    filePath: "songs/2.mp3",
    coverPath: "cover/2.jpg",
  },
  {
    songName: "Matru ki bijli ka mandola",
    filePath: "songs/3.mp3",
    coverPath: "cover/3.jpg",
  },
  {
    songName: "Nani teri morni",
    filePath: "songs/4.mp3",
    coverPath: "cover/4.jpg",
  },
  {
    songName: "sakhiya",
    filePath: "songs/5.mp3",
    coverPath: "cover/5.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "songs/6.mp3",
    coverPath: "cover/6.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "songs/7.mp3",
    coverPath: "cover/7.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "songs/8.mp3",
    coverPath: "cover/8.jpg",
  },
];

songitems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
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

// change song by right click

rightPlay.addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-ciecle");
  masterPlay.classList.add("fa-pause-circle");
});

leftPlay.addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-ciecle");
  masterPlay.classList.add("fa-pause-circle");
});
