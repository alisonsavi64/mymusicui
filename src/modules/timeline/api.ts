const timelineApiMemory = {
    async getAll(id: number){
        return {
            id: 1,
            project_id: id,
            tracks: [
                {
                    track_id: 1,
                    start_track: '00:20',
                    final_track: '00:30',
                    start_audio: '01:00',
                    final_audio: '01:10',
                    audio_id: 1,
                    sequence: 1
                },
                {
                    track_id: 2,
                    start_track: '00:30',
                    final_track: '00:35',
                    start_audio: '01:10',
                    final_audio: '01:15',
                    audio_id: 2,
                    sequence: 2
                },
            ],
            audios: [
                {
                    id: 1,
                    url: '/mock-audios/piano-loop.mp3',
                    type: 'audio/mpeg',
                    project_id: 1
                },
                {
                    id: 2,
                    url: '/mock-audios/piano-loop2.mp3',
                    type: 'audio/mpeg',
                    project_id: 1
                }
            ],
        }
    }
}

export default timelineApiMemory