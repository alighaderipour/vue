let vm = Vue.createApp({
    data(){
        return {
            mode:1,
            dropMode:0
        }
    },
    methods:
        {
            setMode(){
                this.mode = this.mode === 1 ? 0 : 1;
            }
        }
}).mount('#app');

let vm2 = Vue.createApp({
    data(){
        return {
            dropMode:0
        }
    },

}).mount('#app2');
