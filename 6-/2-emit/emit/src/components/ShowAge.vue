<script>
export default {
    name: 'showage',
    props:["age"],
        data() {
        return {
        }
    }
}
</script>

<template>
    <div>
        <p>
            current age :{{ age }} (from ShowAge.vue)
        </p>
    </div>
</template>

<style>
</style>