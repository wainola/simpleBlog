import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

// fetch a list of posts
export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/post${API_KEY}`);
    return{
        type: FETCH_POSTS,
        payload: request
    };
}