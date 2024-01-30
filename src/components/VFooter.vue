<script setup>
import VTitle from '@/components/ui/VTitle.vue'
import VLink from '@/components/ui/VLink.vue'
</script>

<template>
    <footer class="footer">
        <div class="sections">
            <div class="section container">
                <v-title>Pages</v-title>
                <RouterLink to="/">
                    <VLink text="Home" icon="dot" />
                </RouterLink>
                <RouterLink to="/about">
                    <VLink text="About" icon="dot" />
                </RouterLink>
                <RouterLink to="/contacts">
                    <VLink text="Contact" icon="dot" />
                </RouterLink>
            </div>
            <div class="section container">
                <v-title>Profiles</v-title>
                <VLink href="https://linkedin.com/in/neideltern" icon="linkedin" trim />
                <VLink href="https://behance.net/neideltern" icon="behance" trim />
                <VLink href="https://dribbble.com/neideltern" icon="dribbble" trim />
            </div>
            <div class="section container">
                <v-title>Contacts</v-title>
                <VLink href="https://t.me/neideltern" text="@neideltern" icon="telegram"/>
                <VLink href="tel:+380956273476" text="+(380)95-627-34-76" icon="call" />
                <VLink href="mailto:neideltern@gmail.com" text="neideltern@gmail.com" icon="mail" />
            </div>
        </div>
        <div class="copyright container">
            <span>© 2024, Design & Development by <b> Neideltern</b>.</span>
            <span>All rights reserved.</span>
        </div>
    </footer>
</template>

<style lang="stylus" scoped>
.footer
    display: grid
    border: $element-foreground 1px solid
    border-bottom: none
    margin: 0 var(--page-margin)
    background: $body-background

.sections
    display: grid
    grid-template-columns: repeat(3, 1fr)

    +tablet()
        grid-template-columns: 1fr
        grid-template-rows: repeat(3, 1fr)

.section
    display: grid
    gap: $gap-md
    border-right: $element-foreground 1px solid

    .title
        margin-bottom: $gap-md

    &:last-child
        border-right: none

    +tablet()
        border-right: none
        border-bottom: $element-foreground 1px solid

        .title
            margin-bottom: $gap-sm

        &:last-child
            border-right: none

.copyright
    display: grid
    place-items: center
    gap: $gap-md
    border-top: $element-foreground 1px solid
    font-size: $font-size-md
    color: $text-color-tertiary

    b
        font-weight: $regular   
        color: $text-color-secondary

    +tablet-lg()
        font-size: $font-size-sm
        gap: $gap-sm
</style>