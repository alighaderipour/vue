<script>
export default {
    name: 'Result',
    data() {
        return {
            results: [
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

<template>
    <div>
        <div class="result">
        <div class="title">You got sample result 1!</div>
        <div class="desc">
            Enter a short description here about the result.
        </div>
    </div>
    </div>
</template>

<style>
</style>