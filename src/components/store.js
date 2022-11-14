import {createStore,applyMiddleware} from 'redux';
import thunk  from 'redux-thunk'
import {root} from './reducer/root'

// import { composeWithDevTools } from "redux-devtools-extension";

const  Middleware=[thunk];
const initialState={}  // depends on

export const store =createStore(
  root,
  initialState,
  // applyMiddleware(thunk), you can use this also
  applyMiddleware(...Middleware)
 
  
)


