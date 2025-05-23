<script>
export default {
    name: 'Questions',
    data() {
        return {
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
        }
    }
}
</script>

<template>
    <div>
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
    </div>
</template>

<style>
</style>