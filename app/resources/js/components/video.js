class VideoControls {

    constructor() {
        this.videos = [];
        this.initializedVideos = [];
        this.initialized = false;
    }


    destroy() {
        if (this.initialized) {
            this.initializedVideos.forEach(videoObj => {
                if (videoObj.mute) videoObj.mute.removeEventListener('click', videoObj.muteHandler);
                if (videoObj.fullScreen) videoObj.fullScreen.removeEventListener('click', videoObj.fullScreenHandler);
            })
            this.initializedVideos = [];
            this.initialized = false;
        }
    }

    init() {
        this.videos = document.querySelectorAll('.js__video[data-video]');
        if (this.videos.length > 0 && !this.initialized) {
            this.videos.forEach(video => {
                let videoId = video.dataset.video;

                if (video.dataset.playback === 'home') {
                    video.currentTime = 6
                }

                let muteButton = document.querySelector(`.js__video__mute[data-video="${videoId}"]`);

                function handleMuteButton() {
                    video.muted = !video.muted;

                    if (!video.muted) {
                        muteButton.classList.add("video__btn__sound--active");
                    } else {
                        muteButton.classList.remove("video__btn__sound--active");
                    }
                }

                if (muteButton) muteButton.addEventListener('click', handleMuteButton);

                function handleFullScreenButton() {
                    if (!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)) {
                        if (video.requestFullscreen) video.requestFullscreen();
                        else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
                        else if (video.webkitEnterFullScreen) {
                            video.webkitEnterFullScreen();
                        } else if (video.msRequestFullscreen) video.msRequestFullscreen();
                    }
                    video.muted = false;
                    video.play();
                    video.currentTime = 0;

                    if (!video.muted && muteButton) {
                        muteButton.classList.add("video__btn__sound--active");
                    } else if (muteButton) {
                        muteButton.classList.remove("video__btn__sound--active");
                    }

                    video.classList.add('video--full-screen');
                }

                if (document.addEventListener) {
                    document.addEventListener('fullscreenchange', exitHandler, false);
                    document.addEventListener('mozfullscreenchange', exitHandler, false);
                    document.addEventListener('MSFullscreenChange', exitHandler, false);
                    document.addEventListener('webkitfullscreenchange', exitHandler, false);
                }

                function exitHandler() {
                    if (document.webkitIsFullScreen === false) {
                        video.muted = true;
                        if (muteButton) {
                            muteButton.classList.remove("video__btn__sound--active");
                        }
                        video.classList.remove('video--full-screen');
                    } else if (document.mozFullScreen === false) {
                        video.muted = true;
                        if (muteButton) {
                            muteButton.classList.remove("video__btn__sound--active");
                        }
                        video.classList.remove('video--full-screen');
                    } else if (document.msFullscreenElement === false) {
                        video.muted = true;
                        if (muteButton) {
                            muteButton.classList.remove("video__btn__sound--active");
                        }
                        video.classList.remove('video--full-screen');
                    }
                }

                let fullScreenButton = document.querySelector(`.js__video__full-screen[data-video="${videoId}"]`);

                if (fullScreenButton) fullScreenButton.addEventListener('click', handleFullScreenButton);

                if (fullScreenButton && this.initialized) {
                    document.onkeydown = function (evt) {
                        if ("key" in evt) {
                            this.handleFullScreenButton();
                        }
                    };
                }


                this.initializedVideos.push({
                    mute: muteButton,
                    video: video,
                    muteHandler: handleMuteButton,
                    fullScreen: fullScreenButton,
                    fullScreenHandler: handleFullScreenButton
                });
            })
            this.initialized = true;
        }
    }

}

let videoControlsScript = null;
export default function () {
    if (!videoControlsScript) videoControlsScript = new VideoControls();
    return videoControlsScript;
}

