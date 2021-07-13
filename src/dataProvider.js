import {fetchUtils} from 'react-admin';
import {stringify} from  'querystring';
import inMemoryJWT from './inMemoryJwt';
const apiUrl = 'http://localhost:5000/api';
const httpClient = (url, options) => {
    if(!options){options = {}}
    if(!options.headers){
        options.headers = new Headers({ Accept: 'application/json' });
    }

    const token = inMemoryJWT.getToken();
    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }

    return fetchUtils.fetchJson(url, options);
};


export default {
    getList: (resource, params) => {
        const url = `${apiUrl}/${resource}`;
        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: json.length
        }));
    },

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getOne: (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    update: (resource, params) => {
        console.log(JSON.stringify(params));
        return httpClient(`${apiUrl}/${resource}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json}))
    },


}