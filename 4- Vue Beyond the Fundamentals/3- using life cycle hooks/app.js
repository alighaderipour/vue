let vm = Vue.createApp({
    data() {
        return {
            message: "Hello world!!!!"
        }
    },
    //****************all life cycles are functions*************************
    // before vue instance initialize
    // we don't have access to data because vue hasn't created the proxy methods
    // not reactive
    beforeCreate() {
        console.log('beforeCreate() function called', this.message)
    },
    //data and methods in instance have been proxied
    //
    created() {
        console.log('created() function called', this.message)

    },
    // gets triggered once the template has been compiled but hasn't been added onto the page yet
    // $el is a property  , it's value  will be the element view is mounted to
    // $el is available once the view has been mounted
    // we will be able to see the value once we run the code
    beforeMount() {
        console.log('beforeMount() function called', this.$el)

    },
    // after template is mounted onto the page
    // at this point we have fully functioning application
    mounted() {
        console.log('mounted() function called', this.$el)

    },
    beforeUpdate() {
        console.log('beforeUpdate() function called')

    },
    updated() {
        console.log('updated() function called')

    },
    beforeUnmount() {
        console.log('beforeUnmount() function called')

    },
    Unmounted() {
        console.log('Unmounted() function called')

    }

})

vm.mount('#app')