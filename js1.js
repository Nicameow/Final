const aiImage = document.getElementById("aiImage");
const faviconLink = document.querySelector("link[rel='shortcut icon']");
    const interval = 5000;
    let currentIndex = 0;
const title = document.title;
window.addEventListener('blur', () => {
    document.title = '免费色情视频及性爱影片 – A片，X级，色情片分享网站 | Pornhub';
    faviconLink.href = "download.png";
})
window.addEventListener('focus', () => {
    document.title = title;
    faviconLink.href = "none"; 
});
const playButton = document.getElementById("playButton");
const audio = document.getElementById("myAudio");

playButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
});
