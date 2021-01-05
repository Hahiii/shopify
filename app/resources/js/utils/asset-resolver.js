export default {
    resolve: function (url) {
        if (url.includes('images.prismic.io/neoh')) {
            return url.replace('images.prismic.io/neoh', 'images-cdn.neoh.com')
        }

        return url;
    },

    resolveStatic: function (path) {
        return 'https://static-cdn.neoh.com/' + path;
    }
}