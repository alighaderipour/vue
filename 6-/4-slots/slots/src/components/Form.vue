<script>
export default {
    name: 'Form',
    data() {
        return {
        }
    }
}
</script>

<template>
  <form>
    <div>
        <slot name="help"></slot>
    </div>
    <div>
        <slot name="email"></slot>
    </div>
    <div>
        <slot name="buttons"></slot>
    </div>
    <slot> nothing to renderr</slot>
  </form>
  

</template>

<style>
</style>