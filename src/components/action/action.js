import {useState} from 'react'

import axios from 'axios'
import{GET_USER_FAIL,GET_USER_SUCCESS,GET_USER_REQUEST} from '../reducer/constant'


export const apiRequest=()=>async(dispatch)=>
{
   
     dispatch({type:GET_USER_REQUEST})
      await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>res.json().then((result)=>
      {
        console.log(result)
        dispatch({type:GET_USER_SUCCESS,payload:result })
    }
    )
    .catch((error)=>
    {
        dispatch({type:GET_USER_FAIL,payload:error })
        console.log(error)
    }
    )
    )
}   




        // dispatch(
        //     {
        //         type:GET_USER_REQUEST,
               
            
        //     }
        // ) 
        // dispatch(
        //     {
        //         type:GET_USER_SUCCESS,
        //         payload: {data}
        //         // payload:data.data
        //     }
        // ) 
        // dispatch(
        //     {
        //         type:GET_USER_FAIL,
        //         // payload: error.data
               
        //     }
        // ) 

// }



// export const apiSuccess =()=>async(dispatch)=>{
    
//     const finalData=  await axios.get('https://jsonplaceholder.typicode.com/users');
            
//         dispatch(
//             {
//                 type:GET_USER_SUCCESS,
//                 payload: finalData.data
//             }
//         ) 
//         dispatch(
//             {
//                 type:GET_USER_FAIL,
//                 payload: finalData.error
//             }
//         ) 
// }

// export const apiFail =()=>async(dispatch)=>{
    
//     const finalData=  await axios.get('https://jsonplaceholder.typicode.com/users');
            
//         dispatch(
//             {
//                 type:GET_USER_FAIL,
//                 payload: finalData.error
//             }
//         ) 
// }



