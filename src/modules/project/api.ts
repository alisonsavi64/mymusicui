import http from "@/core/http"
import type { projectType } from "./types";

const projectsApi = {
    async getAll(): Promise<projectType[]>{
        const response = await http.get('/projects')
        return response.data; 
    }
}

const projectsApiMemory = {
    async getAll(): Promise<projectType[]>{        
        return [{description: "teste"}, {description: "teste2"}, {description: "teste3"}]; 
    }
}


export default projectsApiMemory;