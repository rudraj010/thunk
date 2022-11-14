
// import {add,del} from  '../action/action'
import {GET_USER_FAIL,GET_USER_SUCCESS,GET_USER_REQUEST} from './constant'
 

const initialState= {users:[]}

export const work=(state=initialState,action)=>{
     switch(action.type){
     case GET_USER_REQUEST:
      return { loading: true ,users: []}
      
      case GET_USER_SUCCESS:
      return{loading: false,  users:action.payload}

      case GET_USER_FAIL:
        return {loading: false, error:action.payload}

        default: return state
      } 

    

    
}

