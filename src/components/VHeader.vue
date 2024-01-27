<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="header">
        <RouterLink class="logo" to="/">
            <img src="/logo.svg" alt="ndtr-logo" />
            <h1>Neideltern</h1>
            <h2>UX/UI Designer</h2>
        </RouterLink>
        <nav class="tabs">
            <RouterLink class="tab" active-class="selected" to="/">Home</RouterLink>
            <RouterLink class="tab" active-class="selected" to="/about">About</RouterLink>
            <RouterLink class="tab" active-class="selected" to="/contact">Contact</RouterLink>
        </nav>
        <div class="links">
            <a class="link icon" href="https://linkedin.com/in/neideltern">linkedin</a>
            <a class="link icon" href="https://dribbble.com/neideltern">dribbble</a>
            <a class="link icon" href="https://www.behance.net/neideltern">behance</a>
        </div>
    </header>
</template>

<style lang="stylus" scoped>
.header
    display: grid
    justify-content: space-between
    grid-template-columns: max-content minmax(max-content, 512px) max-content
    grid-template-areas: 'logo tabs links'
    margin: var(--header-margin-top) var(--page-margin) var(--header-margin-bottom)
    padding: 0 var(--container-padding-horizontal)
    gap: $gap-lg

    +tablet()
        grid-template-columns: repeat(2, max-content)
        grid-template-areas: 'logo links' 'tabs tabs'

// logo

.logo
    grid-area: logo
    display: grid
    align-items: center
    align-content: center
    grid-template-areas: 'img title' 'img subtitle'
    height: $control-height-lg
    column-gap: 20px
    row-gap: 10px

    img
        grid-area: img
        height: inherit
    h1
        grid-area: title
        font-size: 20px
        line-height: 1
        font-weight: $medium
        color: $text-color-primary
    h2
        grid-area: subtitle
        font-size: 12px
        line-height: 1
        font-family: $mono
        font-weight: $light
        color: $text-color-tertiary

    +tablet()
        column-gap: 12px
        row-gap: 8px
        img
            height: 36px
        h1
            font-size: 16px
        h2
            font-size: 10px

// tabs

.tabs
    grid-area: tabs
    display: grid
    grid-auto-flow: column
    grid-auto-columns: 1fr
    gap: 2px
    padding: 2px
    border-radius: 100px
    height: $control-height-lg
    background: $body-background
    border: $element-foreground 1px solid

    +tablet()
        grid-auto-columns: 1fr

.tab
    position: relative
    user-select: none
    z-index: 101
    display: grid
    place-items: center
    height: 100%
    padding: 0 24px
    font-family: $mono
    font-weight: $light
    font-size: $font-size-sm
    color: $text-color-tertiary
    transition: color .2s ease-in-out, transform .3 $ease-out-back

    &:after
        content: ''
        position: absolute
        z-index: -1
        height: 100%
        width: 100%
        border-radius: 100px
        background: $element-foreground
        // before transition
        opacity: 0
        transform: scale(.76)
        // transition
        transition-property: opacity, transform
        transition-timing-function: $ease-out-back
        transition-duration: .3s
    &:hover
        color: $text-color-secondary
    &:active
        transform: scale(.96)
    &.selected
        color: $text-color-primary
        &:after
            opacity: 1
            transform: scale(1)

    +tablet()
        padding: 0

// links

.links
    grid-area: links
    display: grid
    grid-auto-flow: column
    grid-auto-columns: max-content
    gap: $gap-md

.link
    user-select: none
    display: grid
    place-items: center
    aspect-ratio: 1
    border-radius: 100%
    height: $control-height-lg
    border: $element-foreground 1px solid
    color: $text-color-tertiary
    font-size: $font-size-lg
    transition: color .2s ease-in-out, transform .3s $ease-out-back

    &:hover
        color: $text-color-secondary
    &:active
        transform: scale(.96)
</style>
