import { SET_PLAYER } from './Action'

const initialState = {
    playersArray: []
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PLAYER :
            return {...state, playersArray: [...state.playersArray, action.payload]}
             default :
                return state;
        }
}