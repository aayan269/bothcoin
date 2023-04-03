import axios from 'axios'
import { DELETE, GET, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from './auth.types'
import jwt_decode from "jwt-decode";

export const Signup=(creds)=>async(dispatch)=>{
console.log(creds)
    try{
        let response=await axios.post('https://cointab-9q7n.onrender.com/user/signup',creds)
        console.log(response.data)
        dispatch({type:SIGNUP_SUCCESS,payload:response.data})
    }
    catch(e){
        console.log(e)
    }
}

export const login=(creds)=>async(dispatch)=>{
   

    try{
        let response=await axios.post('https://cointab-9q7n.onrender.com/user/login',creds)
        console.log(response.data)
        dispatch({type:LOGIN_SUCCESS,payload:response.data})
    }catch(e){
        console.log(e.response.data)
       
        dispatch({type:LOGIN_ERROR,payload:e.response.data.message})

    }
}



export const getUsers=()=>async(dispatch)=>{
    let token=localStorage.getItem("token")
   let user=jwt_decode(token)
   console.log(user)
    try{
        let response=await axios.get(`https://cointab-9q7n.onrender.com/user/${user.id}`,{
            headers:{
                "authorization":token
            }
        })

        console.log(response.data)
       dispatch({type:GET,payload:response.data})

    }
    catch(e){

    }
}






export const logout=()=>(dispatch)=>{dispatch({type:LOGOUT})}