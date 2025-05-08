const vm = Vue.createApp({
    data(){
        return{
            firstName : 'ali',
            lastName : 'ghaderi pour'
        }
    },
    // do not use arrow function in methods
    methods:{
        fullName(){
                return `${this.firstName} ${this.lastName}`
        }

    }
}).mount('#jasem')


