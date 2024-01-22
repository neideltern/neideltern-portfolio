<script setup>
import { RouterView } from 'vue-router'
import VHeader from '@/components/VHeader.vue'
</script>

<template>
    <VHeader />
    <RouterView />
</template>

<style lang="stylus">
body
    font-family $sans
    font-weight $light
    color $text-color-primary
    background $body-background
    padding 0 var(--page-padding)
</style>