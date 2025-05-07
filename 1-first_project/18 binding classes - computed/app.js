let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            textColor :''
        }
    }, computed:{
        purple_circle(){
            return {banafash: this.isPurple}
        }
    }
}).mount('#app')