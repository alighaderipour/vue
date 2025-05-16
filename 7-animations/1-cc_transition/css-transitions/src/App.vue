<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
    };
  },
  methods:{
    flagToggle(){
        return this.flag = !this.flag
    }
  }
};
</script>

<template>
  <div>
    <button type="button" @click="flagToggle">{{ flag ? 'bye' : 'hello' }}</button>
    <div>
      <Transition name="fade" duration="1000">
        
        <h1 v-if="flag">hello</h1>
        <h1 v-else>bye</h1>
      </Transition>
     

    </div>
  </div>
</template>

<style>
.fade-enter-from{
opacity: 0;
}
.fade-enter-active{
transition: all 1.25s linear;
}
.fade-leave-to{
  transition: all 1.05s linear;
  opacity: 0;
}
</style>
