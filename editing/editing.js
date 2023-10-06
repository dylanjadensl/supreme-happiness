const videoSources = ["video1.mp4", "video2.mp4", "video3.mp4"]; // Add more video sources as needed
let currentVideoIndex = 0;

function loadVideo(videoIndex) {
    const video = document.getElementById('current-video');
    if (videoIndex >= 0 && videoIndex < videoSources.length) {
        currentVideoIndex = videoIndex;
        video.src = videoSources[currentVideoIndex];
        video.load();
        video.play();
    }
}
