import http from '@/services/http';

export function getAll(){
    return http.get('/projects');
}