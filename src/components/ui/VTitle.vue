<template>
    <h3 class="title"><slot></slot></h3>
</template>

<style lang="stylus" scoped>
.title
    line-height: 1
    width: fit-content
    white-space: nowrap
    font-weight: $regular
    font-size: var(--title-font-size)
    color: $text-color-primary
</style>
