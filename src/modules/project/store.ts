import { defineStore } from 'pinia';
import projectsApi from './api';
import type { projectType } from './types';

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [] as projectType[],
        loading: false
    }),
    actions: {
        async fetchProjects(){
            this.loading = true;
            try{
                this.projects = await projectsApi.getAll();
                console.log(this.projects);
            } catch(e){

            } finally{
                this.loading = false;
            }
        }
    }
}); 