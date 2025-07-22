<template>
    <ul>
        <ProjectItem v-for="project in projects" :project="project"/>   
    </ul>
</template>

<script setup lang="ts">
    import type { projectType } from '../types';
    import ProjectItem from './ProjectItem.vue';
    defineProps<{
        projects: projectType[]
    }>();
</script>   