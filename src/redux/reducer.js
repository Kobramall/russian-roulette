import { SET_PLAYER, ASSIGN_BULLET, ASSIGN_ORDER, NEXT_PLAYER, NEXT_PHASE, ACTION_CARD } from './Action'

const initialState = {
    message: 'Phase 1',
    playersArray: [],
    bulletPlayer:'',
    turnOrder:{},
    currentPlayer: 0,
    actionCardPlayed: ''
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PLAYER:
            return {...state, playersArray: [...state.playersArray, action.payload]}
       
        case  ASSIGN_BULLET:
              return{...state, bulletPlayer: action.payload}    
        
        case  ASSIGN_ORDER:
              return {...state, turnOrder: action.payload}   
        
        case NEXT_PLAYER:
                return {...state, currentPlayer: state.currentPlayer + 1}

                case NEXT_PHASE:
                return {...state, currentPlayer: 0, message: 'Phase 2'}
        case ACTION_CARD: 
           if(action.payload === 'Mix cards'){
                return {...state, actionCardPlayed: 'This one worked'}
            }else if(action.payload === 'shuffle cards'){
            return {...state, actionCardPlayed: 'This one worked also'}
            }break
              
        default :
                return state;
        }
       
}