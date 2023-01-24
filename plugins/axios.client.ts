import axios, {CreateAxiosDefaults} from "axios";


export default defineNuxtPlugin((nuxtApp) => {
    const baseURL = "http://localhost:8000";

    const headers = {
        common: {
            Accept: 'application/json, text/plain, */*'
        },
        delete: {},
        get: {},
        head: {},
        post: {},
        put: {},
        patch: {}
    }

    const options: CreateAxiosDefaults = {
        baseURL,
        proxy: false,
        headers
    }
    const axiosInstance = axios.create(options);

    return {
        provide: {
            axios: axiosInstance,
        },
    };
})