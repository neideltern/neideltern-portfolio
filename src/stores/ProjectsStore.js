import { defineStore } from 'pinia'
import yaml from 'js-yaml'

export const useProjectsStore = defineStore('ProjectsStore', {
    state: () => ({
        Projects: []
    }),
    actions: {
        async fetchProjects() {
            try {
                const response = await fetch('./data/projects.yaml')
                const data = await response.text()
                this.projects = yaml.load(data)
            } catch (error) {
                console.error('Error fetching projects:', error)
            }
        }
    }
})