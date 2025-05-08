    const vm = Vue.createApp({
    data() {
        return {
            counter: 0,
            firstName: 'ali',
            middleName :'',
            lastName: 'ghaderi pour'

        }
    },
    // do not use arrow function in methods
    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
        increment() {
            this.counter++
        },

        decrement() {
            console.log('Decrement triggered!');
            this.counter--
        },
        firstNameUpdate(msg, event){
            console.log(msg)
            this.firstName = event.target.value

        }
        ,
        lastNameUpdate(event) {

            console.log('Full event:', event);
            console.log('Target value:', event.target.value); // Current input value
            console.log('Key pressed:', event.data); // The specific character added
            console.log('Input type:', event.inputType); // What kind of input occurred
            this.lastName = event.target.value
        },
        middleNameUpdate(event){
            this.middleName= event.target.value
        }


    }
}).mount('#jasem')


