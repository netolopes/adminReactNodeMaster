import { SET_LOADING,  GET_USERS } from '../actions/types';

const initialState = {
    user: null,
    users: null,
    loading: false
}

const userReducer = (state = initialState, action) => {

    switch(action.type) {

        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
/*
        case GET_USER:
            return {
                ...state,
                student: action.payload,
                loading: false
            }
*/
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }

}

export default userReducer;