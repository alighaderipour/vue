<script>
export default {
  name: "user",
  props: {
    age: {
      type: Number,
      validator(value) {
        return value < 130;
      },
    },
    user_name: {
      type: Number,
      required: true,
    },
    job: {
      type: String,
      default: "employed",
    },
    decreaseAge:Function

  },
  data() {
    return {};
  },
  methods:{
    increaseAge(num){
        this.$emit("increase-age", num)
    }
  }
};
</script>

<template>
    <button type="button" @click="increaseAge(1)"> increase age </button>
    <button type="button" @click="decreaseAge(3)"> decrease age </button>
  <div>you are {{ age }}</div>
</template>

<style></style>
