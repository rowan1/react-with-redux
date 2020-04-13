import jsonPlaceHolder from '../api/jsonPlaceHolder';

export const fetchPosts = () => async (dispatch) => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response.data});
}

export const fetchUsers = (id) => async dispatch => {
        const response = await jsonPlaceHolder.get(`/users/${id}`);
        dispatch({type: 'FETCH_USER', payload: response.data});
}

// export const fetchPosts = () => {
//     return async (dispatch) => {
//     const response = await jsonPlaceHolder.get('/posts');
//     dispatch({ type: 'FETCHED_POSTS', payload: response});
// }}

