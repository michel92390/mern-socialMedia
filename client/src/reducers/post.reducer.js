//jshint esversion:6

import { GET_POSTS, LIKE_POST, UNLIKE_POST } from "../actions/post.actions";

//stocker les information du user que l'on pourra ensuite utiliser ou l'on veut

const initialState = {};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case LIKE_POST:
            return state.map((post) => {
                if (post._id === action.payload.postId) {
                    return {
                        ...post,
                        likers: [action.payload.userId, ...post.likers]
                    };
                }
                //sinon il ne retourne pas les post, uniquement celui liker
                return post;
            });
        case UNLIKE_POST:
            return state.map((post) => {
                if (post._id === action.payload.postId) {
                    return {
                        //tu retourne le post tel quil est et...
                        ...post,
                        // ... le tableau des likers en retirant le id
                        likers: post.likers.filter((id) => id !== action.payload.userId)
                    };
                }
                //sinon il ne retourne pas les post, uniquement celui liker
                return post;
            });
        
        default:
            return state;
    }
}