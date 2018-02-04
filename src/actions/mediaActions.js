import * as types from '../constants/actionTypes';

// Returns an action type, SELECTED_IMAGE and the image selected
export const selectImageAction = (image) =>({
 type:types.SELECTED_IMAGE,
 image
});

// Returns an action type, SELECTED_VIDEO and the video selected
export const selectVideoAction = (video) =>({
    type:types.SELECTED_VIDEO,
    video
});

// Returns an action type, SELECTED_VIDEO and the video selected
export const searchMediaAction = (payload) =>({
    type:types.SEARCH_MEDIA_REQUEST,
    payload
});