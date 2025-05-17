<script>
export default {
  name: "app",
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("🚀 ~ beforeEnter ~ el:", el);
    },
    enter(el, done) {
      console.log("🚀 ~ enter ~ el:", el);
      const anm = el.animate([{transform:"scale3d(0,0,0)"}, {transform:"scale3d(1,1,1)"}],{duration: 1000})
      anm.onfinish = ()=>{
        done();
      }
    },
    afterEnter(el) {
      console.log("🚀 ~ afterEnter ~ el:", el);
    },
    beforeLeave(el) {
      console.log("🚀 ~ beforeLeave ~ el:", el);
    },
    leave(el, done) {
      console.log("🚀 ~ leave ~ el:", el);

      const anm = el.animate([{transform:"scale3d(1,1,1)"}, {transform:"scale3d(0,0,0)"}],{duration: 1000})
      anm.onfinish = ()=>{
        done();
      }
    },
    afterLeave(el) {
      console.log("🚀 ~ afterLeave ~ el:", el);
    },
    enterCancelled(el) {
      console.log("🚀 ~ enterCancelled ~ el:", el);
    },
    leaveCancelled(el) {
      console.log("🚀 ~ leaveCancelled ~ el:", el);
    },
  },
};
</script>

<template>
  <div>
    <button type="button" @click="this.flag = !this.flag">toggle</button>
    <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
      :css="false"  
     
    >
     <!-- we tell vue to do not look for css animation  so we set :css ="false" so vue wont look for css and straight goes to js animation-->
      <h2 v-if="flag">hey</h2>
    </Transition>
  </div>
</template>

<style>
 
</style>
