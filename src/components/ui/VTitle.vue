<template>
    <h3 class="title"><slot></slot></h3>
</template>

<style lang="stylus" scoped>
.title
    line-height: 1
    width: fit-content
    white-space: nowrap
    font-weight: $medium
    font-size: $font-size-xl
    color: $text-color-primary

    +tablet-lg()
        font-size: $font-size-hg

    +mobile()
        font-size: $font-size-lg
</style>
