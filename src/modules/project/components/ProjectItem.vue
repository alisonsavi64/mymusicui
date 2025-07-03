<template>

    <RouterLink :to="`/timeline/${project.id}`"><li class="border p-2">{{ project.description }}</li></RouterLink>

</template>

<script  setup lang="ts">
import { RouterLink } from 'vue-router';
import type { projectType } from '../types';

    defineProps<{
        project: projectType
    }>();
</script>