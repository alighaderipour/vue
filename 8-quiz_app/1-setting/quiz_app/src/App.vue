<script>
import Questions from './components/Questions.vue';
import Result from './components/Result.vue';
export default {
    name: 'App',
    data() {
        return {
          
    
        }
    },
    components:{
      Questions,
      Result
    }
}
</script>

<template>
   <div class="ctr">
    <questions />
    <result />
  
    <button type="button" class="reset-btn">Reset</button>
</div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  font-size: 20px;
  font-family: sans-serif;
  padding-top: 20px;
  background: #e6ecf1;
}

.ctr {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}





.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s linear;
}
.fade-leave-active {
  transition: all 0.3s linear;
  opacity: 0;
  position: absolute;
}
.fade-leave-to {
  opacity: 0;
} 

.reset-btn {
  background-color: #ff6372;
    border: 0;
    font-size: 22px;
    color: #fff;
    padding: 10px 25px;
    margin: 10px auto;
    display: block;
}




.reset-btn:active, .reset-btn:focus, .reset-btn:hover{
  border: 0;
  outline: 0;
}

</style>