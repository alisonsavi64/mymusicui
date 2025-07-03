<template>
    <div class="border border-white m-5">
        <input :placeholder="placeholder" type="text">
    </div>
</template>

<script setup lang="ts">

    defineProps<{
        placeholder: string
    }>()
</script>