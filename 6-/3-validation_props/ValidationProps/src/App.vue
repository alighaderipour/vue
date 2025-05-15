<script>
import User from './components/User.vue'
export default {
    name: 'app',
    components:{
        User
    },
    data() {
        return {
            age:32,
            user_name:222,
            job:"employed"
        }
    },
    methods:{
        increaseAge(num){
            return this.age+=num
        },
        decreaseAge(num){
            return this.age-= num
        }
    }

}
</script>

<template>
  <div>
    <User :age="age" @increase-age="increaseAge" :decrease-age="decreaseAge"></User>
  </div>
</template>

<style></style>
