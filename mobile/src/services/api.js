import axios from 'axios';

const api = axios.create({
    // TOOD: alterar IP para utilizar:
    // imulador do iOS: "localhost"
    // imulador do Android: "10.0.2.2"
    // Smartphone: obter o IP do Expo Dev Tool
    // A porta é sempre a do NodeJS (Backend)
    baseURL: 'http://5350ed4f.ngrok.io',
});

export default api;