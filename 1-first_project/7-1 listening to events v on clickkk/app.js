const vm = Vue.createApp({
    data() {
        return {
            counter: 1

        }
    },
    // do not use arrow function in methods
    methods: {
        increament() {
            this.counter++
        },

        decreament() {
            this.counter--
        }

    }
}).mount('#jasem')


