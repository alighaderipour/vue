<template>
  <div class="ctr">
    <transition name="fade" mode="out-in">
      
      <questions :questions="questions" :questionsAnswered="questionsAnswered" v-if="questionsAnswered < questions.length"
      @question-answered ="questionAnswered"
      />
      <results :all_results="all_results" :totalCorrect="totalCorrect" v-else/>
    </transition>
     
    
    <button type="button" class="reset-btn" @click.prevent="resetBtn" v-if="questionsAnswered=== questions.length"> reset</button>  </div>
</template>


<script>
import Results from './components/Results.vue';
import Questions from './components/Questions.vue';

export default {
  name:'App',

  components:{
    Questions,
    Results
  },
  methods:{
    resetBtn(){
      this.questionsAnswered = 0;
      this.totalCorrect = 0 
    },
    questionAnswered(is_correct){
        if (is_correct){
          this.totalCorrect +=1 
        }
        this.questionsAnswered+=1
      if (this.questionAnswered  === this.questions.length) {
        this.questionAnswered = 0
      } else {
        true
      }
    }
  }
  ,
  data(){
    return {
        questionsAnswered:0,
        totalCorrect :0,
        questions: [
        {
            q: 'What is 2 + 2?',
            answers: [
                {
                    text: '4',
                    is_correct: true
                },
                {
                    text: '3',
                    is_correct: false
                },
                {
                    text: 'Fish',
                    is_correct: false
                },
                {
                    text: '5',
                    is_correct: false
                }
            ]
        },
        {
            q: 'How many letters are in the word "Banana"?',
            answers: [
                {
                    text: '5',
                    is_correct: false
                },
                {
                    text: '7',
                    is_correct: false
                },
                {
                    text: '6',
                    is_correct: true
                },
                {
                    text: '12',
                    is_correct: false
                }
            ]
        },
        {
            q: 'Find the missing letter: C_ke',
            answers: [
                {
                    text: 'e',
                    is_correct: false
                },
                {
                    text: 'a',
                    is_correct: true
                },
                {
                    text: 'i',
                    is_correct: false
                }
            ]
        },
    ],
    all_results: [
        {
            min: 0,
            max: 2,
            title: "Try again!",
            desc: "Do a little more studying and you may succeed!"
        },
        {
            min: 3,
            max: 3,
            title: "Wow, you're a genius!",
            desc: "Studying has definitely paid off for you!"
        }
    ]

    }
  }
}
</script>

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
.questions-ctr {
  position: relative;
  width: 100%;
}
.question {
  width: 100%;
  padding: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  background-color: #00ca8c;
  color: #fff;
  box-sizing: border-box;
}
.single-question {
  position: relative;
  width: 100%;
}
.answer {
  border: 1px solid #8e959f;
  padding: 20px;
  font-size: 18px;
  width: 100%;
  background-color: #fff;
  transition: 0.2s linear all;
}
.answer span {
  display: inline-block;
  margin-left: 5px;
  font-size: 0.75em;
  font-style: italic;
}
.progress {
  height: 50px;
  margin-top: 10px;
  background-color: #ddd;
  position: relative;
}
.bar {
  height: 50px;
  background-color: #ff6372;
  transition: all 0.3s linear;
}
.status {
  position: absolute;
  top: 15px;
  left: 0;
  text-align: center;
  color: #fff;
  width: 100%;
}
.answer:not(.is-answered) {
  cursor: pointer;
}
.answer:not(.is-answered):hover {
  background-color: #8ce200;
  border-color: #8ce200;
  color: #fff;
}

.title {
  width: 100%;
  padding: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  background-color: #12cbc4;
  color: #fff;
  box-sizing: border-box;
}
.desc {
  border: 1px solid #8e959f;
  padding: 20px;
  font-size: 18px;
  width: 100%;
  background-color: #fff;
  transition: 0.4s linear all;
  text-align: center;
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

.result{
  width: 100%;
}


.reset-btn:active, .reset-btn:focus, .reset-btn:hover{
  border: 0;
  outline: 0;
}
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 0.3s linear;
}

.fade-leave-active{
  transition: all 0.3s linear;
  opacity: 0;
  position: absolute;
}
.fade-leave-to{
  opacity: 0;
}
</style>