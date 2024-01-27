<template>
    <div class="hero">
        <div class="overlay container">
            <div class="text">
                <h1 class="title">Hi, <span>Neideltern</span> is here!</h1>
                <h2 class="subtitle">
                    Hendrerit commodo nullam facilisis felis. Volutpat ultrices vestibulum tortor
                    nibh risus ultrices nec aliquam sed. Diam facilisi tellus tellus id. Risus.
                </h2>
                <div class="buttons">
                    <button class="button primary">Show CV</button>
                    <button class="button secondary">Contact me</button>
                </div>
            </div>
        </div>
        <video class="animation" muted autoplay loop playsinline>
            <source src="/hero.webm" poster="/hero.webp" type="video/webm" />
        </video>
    </div>
</template>

<style lang="stylus" scoped>
.hero
    position: relative
    overflow: hidden
    width: 100%
    border-radius: $hero-border-radius $hero-border-radius 0 0
    height: calc(100svh - var(--header-margin-top) - var(--header-margin-bottom) - 42px)

.overlay
    height: 100%
    display: grid
    align-content: center
    background: linear-gradient(180deg, var(--body-background) 80%, var(--body-background) 100%)

.text
    display: grid
    grid-auto-rows: max-content
    gap: $gap-xl
    margin: 0 var(--page-margin)
    margin-bottom: calc(var(--container-padding-horizontal) * 2 + 24px)

.title
    font-size: 64px
    line-height: 1.2
    font-weight: $regular
    color: $text-color-primary

    span
        font-family: $mono
        font-weight: $medium

.subtitle
    font-size: 32px
    line-height: 1.4
    font-weight: $light
    color: $text-color-secondary
    text-wrap: balance

.animation
    position: absolute
    z-index: -1
    width: 100%
    height: 100%
    top: 0
    left: 0
    object-fit: cover
    object-position: center

.buttons
    display: grid
    grid-auto-flow: column
    grid-auto-columns: max-content
    gap: $gap-lg

.button
    display: grid
    place-items: center
    height: $control-height-lg
    border-radius: 100px
    width: 152px
    font-weight: $regular
    font-size: $font-size-md

    &.primary
        color: $element-background
        background: $text-color-primary

    &.secondary
        color: $text-color-primary
        border: $text-color-primary 1px solid
</style>
