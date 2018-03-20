import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';
import _ from 'lodash';

export default function(state={}, action){
    switch(action.type){
        case DELETE_POST:
            // return the new state wihtout the post that was deleted
            return _.omit(state, action.payload);
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState =  {...state};
            // newState[post.id] = post;
            // return newState;
            return {...state, [action.payload.data.id] : action.payload.data };
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}