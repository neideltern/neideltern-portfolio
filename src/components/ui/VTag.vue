<script setup>
defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>

<template>
    <span class="tag">{{ name }}</span>
</template>

<style lang="stylus" scoped>
.tag
    display: flex
    align-items: center
    width: max-content  
    padding: 0 16px
    border-radius: 100px
    height: $control-height-md
    background: $element-background
    font-weight: $light
    font-family: $mono
    font-size: $font-size-sm
    color: $text-color-tertiary
</style>
