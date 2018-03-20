import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POSTS = "CREATE_POSTS";
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=NicolasRiquelme';

// fetch a list of posts
export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return{
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback){
    // calling the callback on the resolution of the promise
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

    return{
        type: CREATE_POSTS,
        payload: request
    }
}