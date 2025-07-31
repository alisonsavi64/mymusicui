export type TimeLine = {
    tracks: Track[],
    audios: Audio[],
    id: string;
    project_id: number;
}

export type Track = {
    clips: Clip[],
    id: string,
    sequence: number
    project_id: number;
}

export type Audio = {
    id: string,
    url: string,
    project_id: number,
    type: 'audio/mpeg'
}

export type Clip = {
    audio_id?: string,
    id?: number,
    track_id: string,
    start_track: number,
    final_track: number,
    start_audio: number,
    final_audio: number
    
}
