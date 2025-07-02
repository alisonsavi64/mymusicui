<template>

    <div v-if="projectStore.loading">
        Carregando
    </div>
    
    <div v-else-if="projectStore.projects.length > 0" class="flex items-center justify-center mt-50 mb-50">
        <div class="bg-black text-white justify-center border border-white w-140">
            <h1 class="font-bold text-center text-4xl">Projects</h1>

            <ProjectList :projects="projectStore.projects" />
        </div>
        
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