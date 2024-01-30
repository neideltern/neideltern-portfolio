<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import VTitle from '@/components/ui/VTitle.vue'
import VLink from '@/components/ui/VLink.vue'
import ProjectCard from '@/components/home/ProjectCard.vue'

// temp
import { ref } from 'vue'
const post = ref({
    thumbnail:
        'https://staticdelivery.nexusmods.com/mods/3333/images/10909/10909-1702220442-1160218078.jpeg',
    title: 'A.G.I.S. - All Game Items Store',
    description:
        'A collection of Virtual Atelier stores containing (almost) all in-game items, organized into product groups, and presented as immersive websites of brands and corpos within Cyberpunk 2077 universe.',
    links: [
        'https://nexusmods.com/cyberpunk2077/mods/10909',
        'https://github.com/neideltern/agis-all-game-items-store'
    ],
    tags: ['Game Modding', 'Open Source', 'UX/UI'],
    date: '11 November, 2023'
})
</script>

<template>
    <main class="home">
        <HeroSection />
        <div class="body">
            <div class="header first container">
                <v-title>Dribbble Shots</v-title>
                <VLink href="https://dribbble.com/neideltern" text="Show more" />
            </div>
            <div class="header container">
                <v-title>Selected Projects</v-title>
                <span class="counter">2022 — 2024 (07)</span>
            </div>
            <ProjectCard
                :thumbnail="post.thumbnail"
                :title="post.title"
                :description="post.description"
                :links="post.links"
                :tags="post.tags"
                :date="post.date"
            />
        </div>
    </main>
</template>

<style lang="stylus" scoped>
.body
    position: relative
    z-index: 1
    overflow: hidden
    border-radius: var(--hero-border-radius) var(--hero-border-radius) 0 0
    border: $element-foreground 1px solid
    border-bottom: none
    margin: 0 var(--page-margin)
    margin-top: calc(-1 * (var(--container-padding-vertical) * 2 + var(--title-font-size)))

.header
    display: flex
    justify-content: space-between
    border-bottom: $element-foreground 1px solid
    background: $body-background

    &:first-child
        border-radius: inherit
        backdrop-filter: blur(32px)
        background: linear-gradient(180deg, opacify($body-background, .24) 0%, $body-background 100%)

.counter
    line-height: 1
    font-family: $mono
    font-weight: $light
    font-size: $font-size-md
    color: $text-color-tertiary
    border-color: $text-color-tertiary
    +tablet-lg()
        font-size: $font-size-sm
</style>
