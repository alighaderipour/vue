const vm = Vue.createApp({
        data() {
            return {
                age : 0
            }

        },

        methods: {},
        computed: {},
        watch: {
           age(newVal, oldVal){
               setTimeout(()=>{
                   this.age  = 20
               }, 3000)
           }
        }
    }
).mount('#jasem')


