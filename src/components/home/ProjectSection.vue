<script setup>
import { onMounted } from 'vue'

// projects store 

import ProjectCard from '@/components/home/ProjectCard.vue'
import { useProjectsStore } from '@/stores/ProjectsStore'

onMounted(async () => {
    const projectsStore = useProjectsStore()
    await projectsStore.fetchProjects()
})

const projectsStore = useProjectsStore()
</script>

<template>
    <section class="projects">
        <ProjectCard
            v-for="(project, index) in projectsStore.projects"
            :key="index"
            :thumbnail="project.thumbnail"
            :title="project.title"
            :description="project.description"
            :links="project.links"
            :tags="project.tags"
            :date="project.date"
        />
    </section>
</template>

<style lang="stylus" scoped>
.project
    border-bottom: $element-foreground 1px solid

    &:last-child
        border-bottom: none
</style>