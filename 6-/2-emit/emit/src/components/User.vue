<script>
export default {
    name: '',
    props:["age"],
    emits:["increaseAge", "decreaseAge"],
    data() {
        return {
        }
    },
    methods:{
        increaseAge(){
            this.$emit("increase-age", 2)
        },
        decreaseAge(){
            this.$emit("decrease-age", 2)
        } 
    }, 
    computed:{
        ageDoubled(){
            return this.age * 2
        }
    }
}
</script>

<template>
    <div>
        <button type="button" @click="increaseAge">increase age</button>
        <button type="button" @click="decreaseAge">decrease age</button>
        <p v-if="age > 18"> you may enter the site</p>
        <p v-else> you are under 18</p>
       
    </div>
    <p>{{ ageDoubled }}</p>
</template>

<style>

</style>