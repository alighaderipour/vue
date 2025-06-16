<template>
  <div class="result">
    
    <div class="title">{{ all_results[resultIndex].title }}</div>
    <div class="desc">{{ all_results[resultIndex].desc }}</div>
  </div>
</template>

<script>
export default{
    name:"Results",
    data(){
        return{

        }
    }, 
    props:["all_results", "totalCorrect"],
    computed:{
      resultIndex(){
        let returned_index = 0;
        this.all_results.forEach((element, index) => {
          if (element.min <= this.totalCorrect && element.max >= this.totalCorrect){
            returned_index = index
          }
        });
        return returned_index
      },
    }
};
</script>