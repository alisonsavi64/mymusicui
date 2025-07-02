<template>

    <div v-if="projectStore.loading">
        Carregando
    </div>
    
    <div v-else-if="projectStore.projects.length > 0">
        <ProjectList :projects="projectStore.projects" />
    </div>

    <div v-else>
        SEM DADOS
    </div>

</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import ProjectList from '../components/ProjectList.vue';
    import { useProjectsStore } from '../store';

    const projectStore = useProjectsStore();

    onMounted(() => {
        projectStore.fetchProjects();
    })



</script>