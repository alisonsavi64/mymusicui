export type TimeLine = {
    tracks: Track[],
    audios: Audio[],
    id: number;
    project_id: number;
}

export type Track = {
    clips: Clip[],
    id: number,
    sequence: number
    project_id: number;
}

export type Audio = {
    id: number,
    url: string,
    project_id: number,
    type: 'audio/mpeg'
}

export type Clip = {
    audio_id: number,
    id: number,
    track_id: number,
    start_track: string,
    final_track: string,
    start_audio: string,
    final_audio: string
    
}
