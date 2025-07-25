const vm = Vue.createApp({
    data() {
        return {
            counter:0,
            firstName:'ali',
            lastName : 'ghaderi pour'

        }
    },
    // do not use arrow function in methods
    methods: {
        fullName(){
           return `${this.firstName} ${this.lastName}`
        },
        increament() {
            this.counter++
        },

        decreament() {
            this.counter--
        },
        updateLastName(event){
            console.log('Full event:', event);
            console.log('Target value:', event.target.value); // Current input value
            console.log('Key pressed:', event.data); // The specific character added
            console.log('Input type:', event.inputType); // What kind of input occurred
            this.lastName= event.target.value.toUpperCase()
        }

    }
}).mount('#jasem')


