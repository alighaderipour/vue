<script>
export default {
  
  unmounted() {
    console.log("Home component unmounted");
  },
  activated() {
    console.log("Home component activated");
  },
  deactivated() {
    console.log("Home component deactivated");
  },
    name: 'Home',
    data() {
        return {
        }
    }
}
</script>

<template>
   <h1>Home Page</h1>
</template>

<style>
</style>