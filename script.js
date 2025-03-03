const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreenButton = player.querySelector(".fullscreen");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }

  // OR

  //   const method = video.paused ? 'play' : 'pause';
  //   video[method]();
}

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

function updateButton() {
  if (video.paused) {
    icon = "►";
  } else {
    icon = "❚ ❚";
  }

  // OR

  // const icon = this.paused ? '►' : '❚ ❚';

  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

skipButtons.forEach((button) => button.addEventListener("click", skip));

function handleRangeUpdate() {
  video[this.name] = this.value;
}

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen().catch((err) => {
      console.error(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

fullscreenButton.addEventListener("click", toggleFullscreen);

// const player = document.querySelector('.player');
// const video = player.querySelector('.viewer');
// const progress = player.querySelector('.progress');
// const progressBar = player.querySelector('.progress__filled');
// const toggle = player.querySelector('.toggle');
// const skipButtons = player.querySelectorAll('[data-skip]');
// const ranges = player.querySelectorAll('.player__slider');
// const fullscreenButton = player.querySelector('.fullscreen');

// function togglePlay() {
//     if (video.paused) {
//         video.play();
//     }
//     else {
//         video.pause();
//     }

// // OR

// //   const method = video.paused ? 'play' : 'pause';
// //   video[method]();

// }

// video.addEventListener('click', togglePlay);
// toggle.addEventListener('click', togglePlay);
// video.addEventListener('play', updateButton);
// video.addEventListener('pause', updateButton);
// video.addEventListener('timeupdate', handleProgress);

// function updateButton() {

//     if (video.paused) {
//         icon = '►';
//     }
//     else {
//         icon = '❚ ❚';
//     }

//     // OR

//     // const icon = this.paused ? '►' : '❚ ❚';

//     toggle.textContent = icon;
// }

// function skip() {
//     video.currentTime += parseFloat(this.dataset.skip);
// }

// skipButtons.forEach(button => button.addEventListener('click', skip));

// function handleRangeUpdate() {
//     video[this.name] = this.value;
// }

// ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// function handleProgress() {
//     const percent = (video.currentTime / video.duration) * 100;
//     progressBar.style.flexBasis = `${percent}%`;
// }

// function scrub(e) {
//     const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//     video.currentTime = scrubTime;
// }

// let mousedown = false;
// progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// progress.addEventListener('mousedown', () => mousedown = true);
// progress.addEventListener('mouseup', () => mousedown = false);

// function toggleFullscreen() {
//     if (!document.fullscreenElement) {
//       player.requestFullscreen().catch(err => {
//         console.error(`Error attempting to enable fullscreen: ${err.message}`);
//       });
//     } else {
//       document.exitFullscreen();
//     }
// }

// fullscreenButton.addEventListener('click', toggleFullscreen);

//const player = document.querySelector('.player');
// const video = player.querySelector('.viewer');
// const progress = player.querySelector('.progress');
// const progressBar = player.querySelector('.progress__filled');
// const toggle = player.querySelector('.toggle');
// const skipButtons = player.querySelectorAll('[data-skip]');
// const ranges = player.querySelectorAll('.player__slider');
// const fullscreenButton = player.querySelector('.fullscreen');

// function togglePlay() {
//     if (video.paused) {
//         video.play();
//     }
//     else {
//         video.pause();
//     }

// // OR

// //   const method = video.paused ? 'play' : 'pause';
// //   video[method]();

// }

// video.addEventListener('click', togglePlay);
// toggle.addEventListener('click', togglePlay);
// video.addEventListener('play', updateButton);
// video.addEventListener('pause', updateButton);
// video.addEventListener('timeupdate', handleProgress);

// function updateButton() {

//     if (video.paused) {
//         icon = '►';
//     }
//     else {
//         icon = '❚ ❚';
//     }

//     // OR

//     // const icon = this.paused ? '►' : '❚ ❚';

//     toggle.textContent = icon;
// }

// function skip() {
//     video.currentTime += parseFloat(this.dataset.skip);
// }

// skipButtons.forEach(button => button.addEventListener('click', skip));

// function handleRangeUpdate() {
//     video[this.name] = this.value;
// }

// ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// function handleProgress() {
//     const percent = (video.currentTime / video.duration) * 100;
//     progressBar.style.flexBasis = `${percent}%`;
// }

// function scrub(e) {
//     const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//     video.currentTime = scrubTime;
// }

// let mousedown = false;
// progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// progress.addEventListener('mousedown', () => mousedown = true);
// progress.addEventListener('mouseup', () => mousedown = false);

// function toggleFullscreen() {
//     if (!document.fullscreenElement) {
//       player.requestFullscreen().catch(err => {
//         console.error(`Error attempting to enable fullscreen: ${err.message}`);
//       });
//     } else {
//       document.exitFullscreen();
//     }
// }

// fullscreenButton.addEventListener('click', toggleFullscreen);
