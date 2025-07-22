<template>
    <div>
        <div class="w-screen border border-white h-24"></div>
        <div v-for="item in timelineStore.timeline.tracks" class="flex h-24">   
            <did class="text-white w-52 border border-white">bar {{item}}</did>
            <input type="file" hidden>
            <did class="text-white w-full border border-white">track {{item}}</did>

        </div>
        <div v-for="item in [1,2,3]" class="flex h-24">   
            <did class="text-white w-52 border border-white">bar {{item}}</did>
            <did class="text-white w-full border border-white">track {{item}}</did>
        </div>
    </div>
    
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useTimelineStore } from '../store';
    const route = useRoute();
    const id = parseInt(route.params.id as string);
    
    const timelineStore = useTimelineStore();

    onMounted(() => {
        timelineStore.featchTimeLine(id);
    });



</script>