<script>
import Greetings from "./components/Greetings.vue";
import Magic from "./components/Magic.vue";
import Test from "./components/Test.vue";

export default {
  name: "App",
  components: {
    Greetings,
    Test, 
    Magic
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <Greetings></Greetings>
    <hr>
    <test></test>
    <hr>
    <Magic></Magic>
  </div>
</template>

<style></style>
