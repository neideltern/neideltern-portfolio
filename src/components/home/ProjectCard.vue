<script setup>
import VLink from '@/components/ui/VLink.vue'
import VTag from '@/components/ui/VTag.vue'

defineProps({
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {

        type: String,
        required: true
    },
    links: {
        type: Object
    },
    tags: {
        type: Object
    },
    date: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="project container">
        <div class="body">
            <div class="header">
                <h1 class="title">{{ title }}</h1>
                <p class="description">{{ description }}</p>
                <div class="links"><VLink v-for="(link, index) in links" :key="index" :href="link" trim /></div>
            </div>
            <div class="footer">
                <div class="tags"><VTag v-for="(tag, index) in tags" :key="index" :name="tag" /></div>
                <time class="date">{{ date }}</time>
            </div>
        </div>
        <picture class="thumbnail">
            <div class="overlay">
                <div class="indicator">Open project</div>
            </div>
            <img :src="thumbnail" alt="project-thumbnail" />
        </picture>
    </div>
</template>

<style lang="stylus" scoped>
.project
    display: grid
    grid-template-areas: 'body thumbnail'
    grid-template-columns: 1fr 2fr
    gap: $gap-lg

.body
    grid-area: body
    display: grid
    grid-template-rows: 1fr max-content
    gap: $gap-lg

.header, .footer
    display flex
    flex-direction: column
    gap: inherit

.links
    display: flex
    flex-direction: column
    gap: $gap-md

.tags
    display: flex
    flex-direction: row
    flex-wrap: wrap
    gap: $gap-md

// text

.title
    color: $text-color-primary
    font-size: $font-size-xxl
    font-weight: $medium
    line-height: 1.2
    text-transform: uppercase

.description
    color: $text-color-secondary
    font-size: $font-size-lg
    font-weight: $light
    line-height: 1.4
    text-overflow(4)

.date
    line-height: 1
    font-family: $mono
    font-weight: $light
    font-size: $font-size-md
    color: $text-color-tertiary
    border-color: $text-color-tertiary

// thumbnail

.thumbnail
    position: relative
    overflow: hidden
    cursor: pointer
    grid-area: thumbnail
    height: fit-content
    border-radius: $card-border-radius
    border: $element-foreground 1px solid

    img
        display block
        z-index: 1
        width: 100%
        aspect-ratio: 16/9
        transition: transform .3s ease-in-out

    &:hover
        img
            transform: scale(1.06)
        .overlay
            opacity: 1
        .indicator
            opacity: 1
            transform: scale(1)

.overlay
    position: absolute
    z-index: 2
    width: 100%
    height: 100%
    display: grid   
    place-items: center
    border-radius: inherit
    background: opacify($body-background, .32)
    backdrop-filter: blur(6px) grayscale(.12)
    // before animation
    opacity: 0
    // animation
    transition: opacity .3s ease-in-out

.indicator
    display: flex
    align-items: center
    border-radius: 100px
    gap: $gap-sm
    padding: 0 24px
    height: $control-height-lg
    background: opacify($element-background, .64)
    backdrop-filter: blur(12px)
    font-family: $mono
    font-weight: $light
    font-size: $font-size-md
    color: $text-color-secondary
    // before animation
    opacity: 0
    transform: scale(.88)
    // animation
    transition: opacity .3s ease-in-out, transform .3s ease-in-out

    &:after
        content: 'open_in_new'
        @extend .icon
</style>
