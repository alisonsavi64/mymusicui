<template>

    <div class="border border-white text-center m-5">    
        <input type="button" :value="value">
    </div>

</template>

<script setup lang="ts">

    defineProps<{
        value: string
    }>()

</script>