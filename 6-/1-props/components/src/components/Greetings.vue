<script>
    export default{
         name : "Greetings",
         props:["age"],
         data(){
            return{
                msg : 'hello world!!! '
                
            }
         }
    }
</script>

<template>
    
<p v-if="age > 25"> {{ msg }}</p>
<p v-else> you need to be at least 25 years old</p>
<p>{{ age }}</p>
</template>
<style scoped lang="scss">
 p:hover{
    color:darken(#CC4444, 15%)
 }
</style>



