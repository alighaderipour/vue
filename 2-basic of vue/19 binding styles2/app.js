let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            textColor :'',
            size:150,
            userRotate:30
        }
    }, computed:{
        purple_circle(){
            return {banafash: this.isPurple}
        },
        resize_cirlce(){
            return {width: this.size +'px', height:this.size+'px', lineHeight:this.size+'px'}
        },
        rotate_circle(){
              return {transform: `rotate(${this.userRotate}deg)`}
        }
    }
}).mount('#app')