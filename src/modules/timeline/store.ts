import { defineStore } from "pinia";
import timelineApiMemory from "./api";
import type { TimeLine } from "./types";

export const useTimelineStore = defineStore('timeline', {
    state: () => ({
        timeline: {} as TimeLine, 
        loading: false 
    }),
    actions: {
        async featchTimeLine(id: number): Promise<any>{
            this.loading = true;
            try{
                this.timeline = await timelineApiMemory.getAll(id);
            } catch(e){
                console.log(e)
            } finally{
                this.loading = false;
            }
        }
    }
})