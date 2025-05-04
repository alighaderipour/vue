// Vue.createapp({}).mount('#app')
const app = Vue.createApp({
    data () {
        return {
            firstName :'ali',
            lastName: 'is the best'
        }
    }
})
app.mount('#app')

const app2 = Vue.createApp({
    data () {
        return {
            firstName :'ali',
            lastName: 'is always best'
        }
    }
})
app2.mount('#app2')


const app3 = Vue.createApp({
    data () {
        return {
            firstName :'hahaha',
            lastName: '😁😁😁😁😁😁😁😁😁'
        }
    }
})
app3.mount('#hahaha')

