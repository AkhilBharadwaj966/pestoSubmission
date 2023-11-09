import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

axios.defaults.baseURL = API_ENDPOINT;

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

axios.defaults.withCredentials = true;

axios.defaults.params = {};

axios.defaults.params.cacheBuster = new Date().getTime();


export default axios;