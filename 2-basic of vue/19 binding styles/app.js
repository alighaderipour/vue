let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            textColor :'',
            size:150
        }
    }, computed:{
        purple_circle(){
            return {banafash: this.isPurple}
        }
    }
}).mount('#app')