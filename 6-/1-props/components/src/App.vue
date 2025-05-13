<script>
import Greetings from "./components/Greetings.vue";
import Magic from "./components/Magic.vue";
import Test from "./components/Test.vue";
import User from "./components/User.vue";

export default {
  name: "App",
  components: {
    Greetings,
    Test, 
    Magic,
    User 
  },
  data() {
    return { age : 20};
  },
};
</script>

<template>
  <div>
    <button type="button" @click="age++"> increase age</button>
    <button type="button" @click="age--"> reduce age</button>
    <greetings :age="age"></greetings>
    <hr>
    <user :age="age"></user>
    <test></test>
    <hr>
    <magic></magic>
  </div>
</template>

<style></style>
