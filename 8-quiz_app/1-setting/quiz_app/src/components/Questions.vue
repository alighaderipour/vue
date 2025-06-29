<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ questionsAnswered + 1 }} out of {{ questions.length }} questions
        answered
      </div>
    </div>
    <transition-group name="fade">
      <div
        class="single-question"
        v-for="(question, index) in questions"
        :key="question.q"
        v-show="questionsAnswered === index"
      >
        <div class="question">{{ question.q }}</div>
        <div
          class="answers"
          v-for="answer in question.answers"
          :key="answer.text"
          @click.prevent="selectAnswer(answer.is_correct)"
        >
          <div class="answer">{{ answer.text }}</div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {};
  },
  props: ["questions", "questionsAnswered"],
  emit: ["question-answered"],
  methods: {
    selectAnswer(is_correct) {
      this.$emit("question-answered", is_correct);
    },
  },
};
</script>
