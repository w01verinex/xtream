import _ from 'lodash'

export default(state={},action)=>{
    switch(action.type){
        case 'EDIT_STREAM':
            // const newState={...state};
            // newState[action.payload.id]=action.payload;
            // return newState;
            return {...state,[action.payload._id]:action.payload};   
        case 'FETCH_STREAM':
            return {...state,[action.payload._id]:action.payload};
        case 'FETCH_STREAMS':
            return {...state,..._.mapKeys(action.payload,'_id')};
        case 'CREATE_STREAMS':
            return {...state,[action.payload._id]:action.payload};
        case 'DELETE_STREAMS':
            return _.omit(state,action.payload);
        default:
            return state;
    }
    
}