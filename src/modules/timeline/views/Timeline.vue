<template>
    <div>
        <div class="w-screen border border-white h-24">
            <button @click="startRecording($event)" class="text-white border border-red-500">Record</button>

        </div>
        <div v-for="item in timelineStore.timeline.tracks" class="flex h-24">
            <div @click="handleClick($event, item.sequence)" :class="`text-white w-full border ${item.sequence == trackSelected ? 'border-red-500' : 'border-white'}`">
                <div :v-if="xPlayer !== null && !isRecording" class="absolute top-0 bottom-0 w-px bg-red-500" :style="{left: xPlayer + 'px'}"></div>
                <div :v-if="isRecording && item.sequence == trackSelected"
                    class="absolute top-0 bottom-0 w-px bg-red-500"
                     :style="{ left: `${xPlayer}px`}"
                ></div>
                <div v-if="item.sequence === trackSelected">
                    <div
                        v-for="(barHeight, index) in barHistory"
                        :key="index"
                        class="absolute w-[2px] bg-green-400"
                        :style="{
                            height: `${barHeight}px`,
                            left: `${ index * 3}px`
                        }"
                    ></div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTimelineStore } from '../store';
const route = useRoute();
const id = parseInt(route.params.id as string);
const timelineStore = useTimelineStore();

onMounted(() => {
    timelineStore.featchTimeLine(id);
});

const xPlayer = ref<number>();
const isRecording = ref(false);
const barHistory = ref<number[]>([]);
const trackSelected = ref<number>()

let audioContext: AudioContext;
let analyser: AnalyserNode;
let source: MediaStreamAudioSourceNode;
let dataArray: Uint8Array;
let interval: number;

function handleClick(event: MouseEvent, trackSequence: number){
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left
    xPlayer.value = x;
    trackSelected.value = trackSequence;
    console.log(trackSelected.value)
}

function startRecording(event: MouseEvent){
    if(isRecording.value) return;
    isRecording.value = true;
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
        analyser.fftSize = 64;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        interval = window.setInterval(() => {

            analyser.getByteFrequencyData(dataArray);
            const avg = dataArray.slice(0, 20).reduce((a, b) => a + b, 0) / 20;
            const normalized = (avg / 255) * 80;
            barHistory.value.push(normalized);
            console.log(barHistory.value)
            xPlayer.value! += 1;
        }, 30)
    });
}

</script>