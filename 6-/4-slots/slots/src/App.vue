<script>
import AppForm from "./components/Form.vue";

export default {
  name: "App",
  data() {
    return {
      help:"some help"
    };
  },
  components: {
    AppForm,
  },
};
</script>

<template>
  <app-form>
    <template v-slot:help>
      <p>{{help}}</p>
    </template>
    <template v-slot:email>
      <input type="email" placeholder="your email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">submit</button>
    </template>
  </app-form>
  
</template>

<style></style>
