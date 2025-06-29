

<script>
import User from "./components/User.vue";
import ShowAge from "./components/ShowAge.vue";
export default {
    name: 'app',
    components: {User,ShowAge},
    data() {
        return {
          age:20
        }
    },
    methods:{
      increaseAge(num){

        this.age +=num
      },
      decreaseAge(num){
        this.age -=3
      }
    }
}
</script>

<template>
    <div>
      <user :age="age"  @increase-age="increaseAge" @decrease-age="decreaseAge">
        
      </user>
      <hr>
      <ShowAge :age="age"></ShowAge>
    </div>
</template>

<style>
</style>