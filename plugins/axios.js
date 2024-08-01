import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {
    // axios.defaults.baseURL = 'http://localhost:8000'
    axios.defaults.baseURL = 'https://api.biolink.eu.org'
    axios.defaults.withCredentials = true;

    return {
        provide: { 
            axios: axios
        },
    }
})
