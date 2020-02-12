import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://dd-fzq.anonymous.mobile.exp.direct:80',
    baseURL: 'http://192.168.0.10:3333',
});

export default api;