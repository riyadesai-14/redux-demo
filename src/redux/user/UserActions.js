import axios from 'axios'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./UserType";


export const fetchUserRequest = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error

    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            console.log("********",response.data);
            dispatch(fetchUserSuccess(users)) 
        })
        .catch(error => {
            const errorMsg = error.message
            console.log(error,"&&&&&&&");
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}


export const fetchUserId= (id) => {
    console.log("------");
    return (dispatch) => {
        // dispatch(fetchUserRequest())
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            const users = response.data
            console.log("====", response.data);
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            console.log(error, "******");
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}