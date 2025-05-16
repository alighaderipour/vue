<script>
export default {
    unmounted(){
        console.log("home component unmounted")
    },
    activate(){
        console.log("home component activated")
    },
    deactivate(){
        console.log("home component deactivated")
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