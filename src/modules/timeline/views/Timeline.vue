<template>
  <div>
    <div class="w-screen border border-white h-24">
      <button @click="startRecording($event)" class="text-white border border-red-500">Record</button>
      <button @click="stopRecording($event)" class="text-white border border-red-500">Stop</button>
    </div>
    <div v-for="item in timelineStore.timeline.tracks" class="flex h-24">
      <div
        @click="handleClick($event, item.sequence)"
        :class="`relative text-white w-full border ${item.sequence == trackSelected ? 'border-red-500' : 'border-white'}`"
      >
        <div
          v-if="xPlayer !== null && !isRecording"
          class="absolute top-0 bottom-0 w-px bg-red-500"
          :style="{ left: xPlayer + 'px' }"
        ></div>
        <div
          v-if="isRecording && item.sequence == trackSelected"
          class="absolute top-0 bottom-0 w-px bg-red-500"
          :style="{ left: `${xPlayer}px` }"
        ></div>
        <div v-if="item.sequence === trackSelected" class="relative h-full">
          <div
            v-for="(barHeight, index) in barHistory"
            :key="index"
            class="absolute w-[2px] bg-green-400 bottom-0"
            :style="{
              height: `${barHeight}px`,
              left: `${xPlayerLastClick! + index}px`
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
const xPlayerLastClick = ref<number>();
const isRecording = ref(false);
const barHistory = ref<number[]>([]);
const trackSelected = ref<number>()
const pixelsPerSecond = 30;
const barSpacing = 1;


let audioContext: AudioContext;
let analyser: AnalyserNode;
let source: MediaStreamAudioSourceNode;
let dataArray: Uint8Array;
let interval: number | null;

function handleClick(event: MouseEvent, trackSequence: number){
    if(isRecording.value) return;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    xPlayer.value = x;
    xPlayerLastClick.value = x;
    trackSelected.value = trackSequence;

    const seconds = x / pixelsPerSecond;
    console.log(`Clicked at time: ${seconds.toFixed(2)}s`);
}


function stopRecording(event: MouseEvent){
    if(isRecording.value){
        clearInterval(interval!);
        interval = null;
        isRecording.value = false;
        console.log(`Start: ${xPlayerLastClick.value! / pixelsPerSecond}`)
        console.log(`End: ${xPlayer.value! / pixelsPerSecond}`)
        // for(const track of timelineStore.timeline.tracks){
            // track.clips.push({
        // 
            // });
        // }
        return;
    } 
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
            xPlayer.value! += barSpacing;
        }, 1000 / pixelsPerSecond);
    });
}

</script>