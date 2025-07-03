export type TimeLine = {
    tracks: Track[],
    audios: Audio[],
    id: number;
    timelineId: number;
}

export type Track = {
    clips: Clip[],
    id: number,
    sequence: number
}

export type Audio = {
    id: number,
    audio: Blob,
    timelineId: number
}

export type Clip = {
    audioId: number,
    id: number,
    
}
