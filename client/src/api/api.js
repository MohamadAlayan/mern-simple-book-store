import axios from "axios";
import _ from "lodash";
import React from "react";

// Apply base url for axios
let API_URL = "https://localhost:5000/api"

export const toFormData = function (data) {
    const formData = new FormData()
    if (data.files) {
        for (const property in data.files) {
            formData.append(property, data.files[property])
        }
    }
    formData.append('json_data',JSON.stringify(data))
    return formData
}

const axiosApi = axios.create({
    baseURL: API_URL,
    transformRequest: (data,) => {
        if (data instanceof FormData) {
            return data
        }
        if (_.has(data, 'files')) {
            return toFormData(data)
        }

        if (typeof data === "object") {
            return JSON.stringify(data)
        } else {
            return data
        }
    }
})

axiosApi.defaults.headers.common["Content-Type"] = "application/json";


axiosApi.interceptors.response.use(response => response, error => error.response)
axiosApi.interceptors.request.use(
    (config) => {
        let token =  localStorage.getItem('token')

        if (token) {
            config.headers['Authorization'] = "Bearer " + token;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export const api = axiosApi;