import axios from "axios";

export default class RequestService {

    static _headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    static _config = {
        headers: this._headers,
        baseURL: '/api/'
    }

     static async get(url, params)
    {
        const config = this._config;
        config.params = params;
        return await axios.get(url, config);

    }

    static async post(url, data)
    {
        return await axios.post(url, data, this._config);
    }

    static async getData(url)
    {
        const response = await this.get(url);
        if(response.status !== 200) {
            throw new Error('cant get data. response status ' + response.status);
        }
        return response.data;

    }
}