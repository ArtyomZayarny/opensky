import axios from 'axios';

export const apiClient = axios.create({
    baseURL:'https://opensky-network.org/api'
});