import type { User } from "./types";

const authApi = {
    async login(email: string, password: string){

    }
}

const authApiMemory = {
    async login(email: string, password: string): Promise<{user: User, token: string}>{
        return {user: {email}, token: '1245125'};
    },
    async logout(): Promise<void>{  
    }
}

export default authApiMemory;