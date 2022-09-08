import { publicRequest } from "../requestMethodes";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        if(res.data) localStorage.setItem('user', JSON.stringify(res.data));
        dispatch(loginSuccess(res.data));
        return res.data;
    }catch(err){
        console.log(err)
        dispatch(loginFailure());
    }
    
}