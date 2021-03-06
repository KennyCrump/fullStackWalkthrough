const initialState = {
    user: {}
}

//action tpes
const GET_USER_DATA = 'GET_USER_DATA'

//action types
export function getUserData(data) {
    return {
        type: GET_USER_DATA,
        payload: data
    }
}


//reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DATA:{
            return Object.assign({}, state, {user: action.payload})
        }

        default:{
            return state;
        }

    }
    
}