let footerEl;
export default {
    init(pageName) {
        footerEl = footerEl ? footerEl : document.getElementById('js__footer');
        if (footerEl) {
            switch (pageName) {
                case('home'):
                case('store'):
                case('athlete-overview'):
                case('challenge-overview'):
                case('challenge'):
                case('story-overview'):
                case('recipe-overview'):
                case('neohpedia'):
                case('faq-overview'):
                case('faq'):
                case('legal'):
                case('press'):
                case('careers'):
                case('investors'):
                case('product-detail'):
                case('shopfinder'):
                    let crossBarTeaser = document.querySelector('.crossbar-teaser')
                    if (!crossBarTeaser) {
                        footerEl.classList.add('footer--primary');
                    } else {
                        if (crossBarTeaser.classList.contains('js__crossbar-black')) {
                            footerEl.classList.add('footer--primary');
                        }
                    }
                    break;
                default:
                    footerEl.classList.remove('footer--primary');
                    break;
            }
        }
    }
}