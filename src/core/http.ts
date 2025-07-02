import axios from 'axios';

const http = axios.create({
    baseURL: 'http://mymusics.test/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default http;