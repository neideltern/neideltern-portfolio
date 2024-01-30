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
                    <button class="button primary">Get in touch <span class="icon">open_in_new</span></button>
                    <button class="button secondary">Check my CV <span class="icon">arrow_outward</span></button>
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
    z-index: 0
    width: 100%
    border-radius: var(--hero-border-radius) var(--hero-border-radius) 0 0
    min-height: 512px
    height: calc(100svh - var(--header-margin-top) - var(--header-margin-bottom) - 42px)

    +tablet()
        height: calc(100svh - var(--header-margin-top) - var(--header-margin-bottom) - 108px) 

.overlay
    height: 100%
    display: grid
    align-content: center
    background: linear-gradient(180deg, opacify(#fff, 0) 0%, opacify($body-background, .5) 80%, $body-background 100%)

.text
    display: grid
    grid-auto-rows: max-content
    gap: $gap-xl
    margin: 0 var(--page-margin)
    margin-bottom: calc(var(--container-padding-vertical) * 2 + var(--title-font-size))

    +mobile()
        text-align: center
        gap: $gap-lg

.title
    font-size: 64px
    line-height: 1.2
    font-weight: $regular
    color: $text-color-primary

    span
        font-family: $mono
        font-weight: $medium

    +desktop-sm()
        font-size: 48px

    +mobile()
        font-size: 28px

.subtitle
    font-size: 28px
    line-height: 1.4
    font-weight: $light
    color: $text-color-secondary
    text-wrap: balance

    +desktop-sm()
        font-size: 24px

    +mobile()
        font-size: 18px

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
    grid-auto-columns: 160px
    gap: $gap-lg

    +mobile()
        gap: $gap-md
        grid-auto-columns: 1fr 1fr

.button
    display flex
    align-items: center
    justify-content: center
    gap: $gap-sm
    height: $control-height-lg
    border-radius: 100px
    font-size: $font-size-md

    &.primary
        font-weight: $regular
        color: $element-background
        background: $text-color-primary

    &.secondary
        font-weight: $light
        color: $text-color-primary
        border: $text-color-primary 1px solid
</style>
