import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: true,
})

export const usersAPI = {
    getPosts() {
        return instance.get('posts')
            .then(response => {
                return response;
            })
    },
    getPhotos() {
        return instance.get('photos')
            .then(response => {
                return response;
            })
    },
}