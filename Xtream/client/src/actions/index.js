import localserver from '../apis/localserver'

import history from '../history';


export const signIn=(userId)=>{
    return{
        type:'SIGN_IN',
        payload:userId
    };
}
export const signOut=()=>{
    return{
        type:'SIGN_OUT'
    };
}


export const createStream=(newValues)=>{
    return async(dispatch)=>{
        
        const response=await localserver.post('/stream/create', newValues);
        
        dispatch({
            type:'CREATE_STREAM',
            payload:response.data
        });
        history.push("/");
        
    };
} 

export const fetchStreams=()=>{
    return async(dispatch)=>{
        
        const response=await localserver.get('/stream/fetchStreams');
        //console.log(response.data);
        dispatch({
            type:'FETCH_STREAMS',
            payload:response.data
        });
    };
}
export const fetchStream=(id)=>{
    return async(dispatch)=>{
        
        const response=await localserver.get(`/stream/fetch/${id}`);
        dispatch({
            type:'FETCH_STREAM',
            payload:response.data
        });
    };
}
export const editStream=(id,formValues)=>{
    return async(dispatch)=>{
        
        const response=await localserver.post(`/stream/edit/${id}`,formValues);
        dispatch({
            type:'EDIT_STREAMS',
            payload:formValues
        });
        history.push("/");
    };
}
export const deleteStream=(id)=>{
    return async(dispatch)=>{
        
        const response=await localserver.post(`/stream/delete/${id}`);
        dispatch({
            type:'DELETE_STREAMS',
            payload:id
        });
        if(response)history.push("/");
    };
}
