let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
})
vm.component("hello", {
  template : `<h1> {{msg}} </h1>`,
  data(){
    return {
      msg:'hello world'
    }
  }
})
vm.mount("#app")

