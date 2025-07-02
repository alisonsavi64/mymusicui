import http from "@/core/http"
import type { projectType } from "./types";

export const projectsApi = {
    async getAll(): Promise<projectType[]>{
        const response = await http.get('/projects')
        return response.data; 
    }
}
