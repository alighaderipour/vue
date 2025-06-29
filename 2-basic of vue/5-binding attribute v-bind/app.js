const vm = Vue.createApp({
    data(){
        return{
           googleURL:'https://www.google.com',
           tarafdariURL:'https://www.tarafdari.com'
        }
    },
    // do not use arrow function in methods
    methods:{
        fullName(){
                return `${this.firstName} ${this.lastName}`
        }

    }
}).mount('#jasem')


