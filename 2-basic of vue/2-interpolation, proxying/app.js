// vm → component instance
const vm = Vue.createApp({
    data(){
        return{
            firstName : 'ali'
        }
    }
}).mount('#jasem')

// proxying
// vm.$data.firstName = vm.firstName
setTimeout(()=>
{
    vm.firstName ='ali is the best';
}, 1000);