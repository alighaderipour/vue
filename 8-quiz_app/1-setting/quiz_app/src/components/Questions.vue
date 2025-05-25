<script>
export default {
  name: "Questions",
  data() {
    return {};
  },
  props: ["questions"],
};
</script>

<template>
  <div class="questions-ctr">
        <div class="progress">
            <div class="bar"></div>
            <div class="status">1 out of 3 questions answered</div>
        </div>
        <div class="single-question">
            <div class="question">Sample Question 1</div>
            <div class="answers">
                <div class="answer">Sample Answer 1</div>
                <div class="answer">Sample Answer 2</div>
                <div class="answer">Sample Answer 3</div>
                <div class="answer">Sample Answer 4</div>
            </div>
        </div>
    </div>

</template>

<style>
.questions-ctr {
  position: relative;
  width: 100%;
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

.answer:not(.is-answered) {
  cursor: pointer;
}
.answer:not(.is-answered):hover {
  background-color: #8ce200;
  border-color: #8ce200;
  color: #fff;
}
</style>
