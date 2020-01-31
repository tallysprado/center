import {createStore} from 'redux'

export const LIKE = "LIKE"
export const UNLIKE = "UNLIKE"
export const KEY = null

const initialState = {
    like: false,
    key: null,
}

//função sem nome
export default  (state = initialState, action) => {
    switch(action.type){
        case LIKE: {
            return {
                ...state,
                like: true,
                key: action.key
            };
        }

        case UNLIKE: {
            return {
                ...state,
                like: false,
                key: action.key,
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}



export const addLike = (key) => (
    
    {
        type: LIKE,
        key,
    }
)

export const removeLike = (key) => (
    {
        type: UNLIKE,
        key,
    }
)

