import Header from './header';
import Vimeo from '@vimeo/player';
import calorieCalculator from './components/calorie-calculator';

let challengePage, trainingPage, challengesOverviewPage;

function greyBlendVideo() {
    let video = document.querySelector('.js__challenges-video');
    let isSafari = navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0;
    if (window.getComputedStyle(document.body).mixBlendMode !== undefined && !isSafari && video) {
        video.classList.add('challenges__video__blend');
    }
}


export default {
    init: function (pageName) {
        // challengePage = document.getElementById('js__challenge-page');
        // trainingPage = document.getElementById('js__training-page');
        challengesOverviewPage = document.getElementById('js__challenges-overview-page');

        const isChallengeOrTrainingPage = pageName === 'training' || pageName === 'challenge';
        const isChallengesOverviewPage = pageName === 'challenge-overview';

        if (isChallengeOrTrainingPage) {
            Header.get().showBackArrow();

            greyBlendVideo();
        } else if (isChallengesOverviewPage) {
            greyBlendVideo();
            calorieCalculator.init();
        }

        var iframe = document.querySelector('#js__vimeo');
        if (iframe) {
            var player = new Vimeo(iframe);
            // player.setVolume(0);
            // player.play();
        }
    },
    destroy: function () {
        Header.get().hideBackArrow();

        if (challengesOverviewPage) {
            calorieCalculator.destroy();
        }
    }
}