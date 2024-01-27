<script setup>
import { RouterView } from 'vue-router'
import VHeader from '@/components/VHeader.vue'
</script>

<template>
    <VHeader />
    <RouterView />
</template>

<style lang="stylus">
// RESET
*
    padding: 0
    margin: 0
    min-width: 0
    border: none
    outline: none
    background: none
    box-sizing: border-box
    text-decoration: none
    font-family: inherit
    -webkit-tap-highlight-color: transparent

button
    cursor: pointer

body
    font-family: $sans
    font-weight: $light
    color: $text-color-primary
    background: $body-background
    padding: 0 var(--page-padding)

.container
    padding: var(--container-padding-vertical) var(--container-padding-horizontal)
</style>