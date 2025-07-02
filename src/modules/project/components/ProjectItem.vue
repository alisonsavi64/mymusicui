<template>

    <li>{{ project.description }}</li>

</template>

<script  setup lang="ts">
import type { projectType } from '../types';

    defineProps<{
        project: projectType
    }>();
</script>