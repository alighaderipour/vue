const vm = Vue.createApp({
    data(){
        return{
            firstName :'' ,
            lastName:''
        }
    },
    // do not use arrow function in methods
    methods:{
        fullName(){
                return `${this.firstName} ${this.lastName}`
        }

    }
}).mount('#jasem')


