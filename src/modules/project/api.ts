import http from "@/core/http"
import type { projectType } from "./types";

const projectsApi = {
    async getAll(): Promise<projectType[]> {
        const response = await http.get('/projects')
        return response.data;
    }
}

const projectsApiMemory = {
    async getAll(): Promise<projectType[]> {
        return [{ description: "teste", id: 1 }, { description: "teste2", id: 2 }, { description: "teste3", id: 3 }];
    }
}


export default projectsApiMemory;