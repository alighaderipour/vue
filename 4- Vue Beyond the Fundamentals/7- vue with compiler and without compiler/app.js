let vm1 = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
}).mount("#app")


let vm2 = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  render() {
    return Vue.h(
      'h1',
      this.message
    )
  }
}).mount("#app2")