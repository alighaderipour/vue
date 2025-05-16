<script>
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  data() {
    return {
      componentName: "Home",
    };
  },
  components: {
    About,
    Home,
  },
};
</script>

<template>
  <div>
    <select v-model="componentName">
      <option value="Home">home</option>
      <option value="About">about</option>
    </select>
  </div>
  <KeepAlive>
  
    <component :is="componentName">Home</component>

  </KeepAlive>
</template>

<style></style>
