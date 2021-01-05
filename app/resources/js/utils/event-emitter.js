export default {
    callbacks: {},
    addEventListener: function (event, callback) {
        this.callbacks[event] = callback;
    },
    emit: function (event, data) {
        if (this.callbacks[event]) {
            try {
                this.callbacks[event](data);
            } catch (error) {
                console.log(error)
            }
        }
    },
    unsubscribe: function (event) {
        if ((this.callbacks[event])) delete this.callbacks[event];
    }
}