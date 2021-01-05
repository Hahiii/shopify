export default function (isFirstPageLoad) {
    if (!isFirstPageLoad && window.instgrm && document.querySelector('.embed__ig')) {
        window.instgrm.Embeds.process();
    }
}

