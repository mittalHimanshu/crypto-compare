import { GET_DETAILS, DD_CHOICE} from '../actions/types'

const initialState = {
    details: 
        { coin: "" ,currency: "", value: "" }
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_DETAILS:
            return{
                ...state,
                details: action.payload
            }

        case DD_CHOICE:
            return{
                ...state,
                details: action.payload
            }
        
        default:
            return state
    }
}