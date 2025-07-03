import { defineStore } from 'pinia';
import type { User } from './types';
import authApi from './api';


export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as null | User,
        token: localStorage.getItem('token')
    }),

    actions: {
        async login(email: string, password: string): Promise<void>{
            const data = await authApi.login(email, password);
            this.user = data.user;
            this.token = data.token;
            localStorage.setItem('token', data.token);
        },

        async logout(){
            await authApi.logout();
            this.user = null;
            this.token = null;
            localStorage.removeItem('token');

        }
    }
})