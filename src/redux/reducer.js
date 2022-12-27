import { SET_PLAYER, ASSIGN_BULLET, ASSIGN_ORDER, NEXT_PLAYER, NEXT_PHASE, ACTION_CARD, SET_BULLET_VIEWABLE, ASSIGN_ACTION_CARDS, SET_TITLE, SET_DIRECTIONS } from './Action'


const initialState = {
    message: '',
    directions: '',
    playersArray: [],
    actioncards: [],
    bulletPlayer:'',
    turnOrder:{},
    currentPlayer: 0,
    actionCardPlayed: '',
    bulletViewable: false,
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PLAYER:
            return {...state, playersArray: [...state.playersArray, action.payload]}
        
        case SET_TITLE:
                return {...state, message: action.payload}  
                
        case SET_DIRECTIONS:
                    return {...state, directions: action.payload}        
       
        case  ASSIGN_BULLET:
              return{...state, bulletPlayer: action.payload}    
        
        case  ASSIGN_ORDER:
              return {...state, turnOrder: action.payload}   
        case ASSIGN_ACTION_CARDS:
                 return{...state}
              
        case NEXT_PLAYER:
                return {...state, currentPlayer: state.currentPlayer + 1}

                case NEXT_PHASE:
                return {...state, currentPlayer: 0, message: 'Phase 2'}
        case ACTION_CARD: 
           if(action.payload === 'Mix cards'){
                return test()
            }else if(action.payload === 'shuffle cards'){
            return {...state, actionCardPlayed: 'This one worked also'}
            }break
        case SET_BULLET_VIEWABLE:
            return{...state, bulletViewable: !state.bulletViewable}    
              
        default :
                return state;
        }
       
}