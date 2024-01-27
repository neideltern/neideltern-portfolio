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
    },
    icon: {
        type: String,
    }
})

const link = computed(() => {
    if (props.trim) return props.href.replace(/^https?:\/\//, '').split('/')[0]
    else return props.href
})
</script>

<template>
    <a class="link" :href="href">
        <span class="icon" v-if="icon">{{ icon }}</span>
        <div class="inner">
            <span class="text">{{ props.text ? props.text : link }}</span>
            <span class="icon">arrow_outward</span>
        </div>
    </a>
</template>

<style lang="stylus" scoped>
.link
    display: flex
    align-items: center
    cursor: pointer
    width: max-content
    gap: $gap-sm
    line-height: 1
    font-family: $mono
    font-weight: $light
    font-size: $font-size-md
    color: $text-color-tertiary
    border-color: $text-color-tertiary
    transition: 
        color .2s ease-in-out, 
        border .2s ease-in-out

    &:hover
        color: $text-color-secondary
        border-color: $text-color-secondary

    +tablet-lg()
        font-size: $font-size-sm

.inner
    display: flex
    align-items: center
    gap: inherit
    padding: 2px 0
    border-bottom:  1px solid
    border-color: inherit
</style>
