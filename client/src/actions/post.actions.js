//jshint esversion:6
import axios from 'axios';

//post
export const GET_POSTS = "GET_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

// num par rapport au scroll
export const getPosts = (num) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/post/`)
            .then((res) => {
                //on cree un array qui regroupe toutes la data des 5 premier element
                const array = res.data.slice(0, num);
                // ondit a payload que tu aura toutes la contenance de array
                dispatch({ type: GET_POSTS, payload: array });
            })
            .catch((err) => console.log(err));
    };
};

export const likePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}api/post/like-post/` + postId,
            data: { id: userId }
        })
        .then((res) => {
            dispatch({ type: LIKE_POST, payload: {postId, userId} });
        })
        .catch((err) => console.log(err));
    };
};

export const unlikePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}api/post/unlike-post/` + postId,
            data: { id: userId }
        })
        .then((res) => {
            dispatch({ type: UNLIKE_POST, payload: {postId, userId} });
        })
        .catch((err) => console.log(err));
    };
};