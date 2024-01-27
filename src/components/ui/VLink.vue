<script setup>
import { computed } from 'vue'

const props = defineProps({
    href: {
        type: String
    },
    text: {
        type: String
    },
    trim: {
        type: Boolean,
        default: false
    }
})

const link = computed(() => {
    if (props.trim) return props.href.replace(/^https?:\/\//, '').split('/')[0]
    else return props.href
})
</script>

<template>
    <a class="link" :href="href">
        {{ props.text ? props.text : link }}<span class="icon">arrow_outward</span>
    </a>
</template>

<style lang="stylus" scoped>
.link
    display: grid
    align-items: center 
    grid-auto-flow: column
    grid-auto-columns: max-content
    gap: $gap-sm
    width: max-content
    padding: 2px 0
    line-height: 1
    font-family: $mono
    font-weight: $light
    font-size: $font-size-md
    color: $text-color-tertiary
    border-bottom: $text-color-tertiary 1px solid
    cursor pointer
    transition: 
        color .2s ease-in-out, 
        border .2s ease-in-out

    &:hover
        color: $text-color-secondary
        border-color: $text-color-secondary
    
    +tablet-lg()
        font-size: $font-size-sm
</style>
