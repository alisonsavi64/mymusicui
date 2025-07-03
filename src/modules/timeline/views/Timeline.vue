<template>
    <div class="text-white">
        {{id}}
    </div>
    
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const id = route.params.id;

    

</script>