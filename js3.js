const dropdown = document.querySelector(".dropdown");
const fixedSidebar = document.querySelector(".fixed-sidebar");
const music = document.getElementById("music");
const musicInfo = document.getElementById("music-info");
let isPlaying = true;
music.volume = 0.2;

dropdown.addEventListener("mouseover", function () {
    const dropdownContent = this.querySelector(".dropdown-content");
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
});

dropdown.addEventListener("mouseout", function () {
    const dropdownContent = this.querySelector(".dropdown-content");
    dropdownContent.style.maxHeight = "0";
});

fixedSidebar.addEventListener("click", function () {
    if (isPlaying) {
        music.pause();
        isPlaying = false;
        music.currentTime = 0;
    } else {
        music.play();
        isPlaying = true;
    }
});
function showMusicInfo() {
    musicInfo.style.display = "block";
    setTimeout(hideMusicInfo, 5000);
}
function hideMusicInfo() {
    musicInfo.style.display = "none";
}
music.addEventListener("play", showMusicInfo);
function handleHover() {
    if (isPlaying) {
        document.getElementById("music").play();
    }
}
music.addEventListener("ended", function() {
    music.currentTime = 0;
});
function showMusicInfo() {
    musicInfo.style.display = "block";
    setTimeout(hideMusicInfo, 5000);
}
function hideMusicInfo() {
    musicInfo.style.display = "none";
}
music.addEventListener("play", showMusicInfo);
const imageUrls = [
        "https://cdn.discordapp.com/attachments/847318233522634772/1120114365018947596/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120114448976334908/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120114540139524236/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120114677872066600/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120114801771819068/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120114855337263137/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120114924509741126/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120114986753212459/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115047222497400/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115109663096964/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115190881591426/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115277829517373/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115348344156170/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115400865222696/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115458843091104/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115528296570880/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115606277075035/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115715412852859/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115777731838012/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115840302456944/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115891284213800/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115926088568913/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120115999493070918/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120116062722199682/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120116132075012216/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120116176257814659/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120116225788354631/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120116306289627167/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120116367157383208/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120116441463652392/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120116489102565577/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120116609265176676/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120116673580630086/image.png",
        "https://cdn.discordapp.com/attachments/847318233522634772/1120116749946331136/image.png",
    ];
    const aiImage = document.getElementById("aiImage");
    const interval = 1000;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        aiImage.classList.add("slide-effect");
    setTimeout(() => {
        aiImage.src = imageUrls[currentIndex];
        aiImage.classList.remove("slide-effect");
        }, 500);
    }, interval);
