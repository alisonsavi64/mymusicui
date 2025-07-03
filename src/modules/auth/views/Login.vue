<template>

    <div class="text-white justify-center items-center flex mt-50">
        <div class='w-80 border border-white h-80'>
            <h1 class="text-center">Login</h1>
            <TextInput placeholder="email"></TextInput>
            <TextInput placeholder="password"></TextInput>
            <SubmitButton value="Sign in"></SubmitButton>
        </div>
    </div>
    

</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import SubmitButton from '../components/SubmitButton.vue';
import TextInput from '../components/TextInput.vue';
import { useAuthStore } from '../store';

const authStore = useAuthStore();

onMounted(() => {
    authStore.login('test@gmail.com', '1234');
})

</script>