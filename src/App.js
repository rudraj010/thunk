 

import {useState,useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux';
import {Table} from 'react-bootstrap'
import {apiRequest} from './components/action/action'

import './App.css';
 

function App() {
  const dispatch=useDispatch(); 
  const data= useSelector(state=>state.total)
  const{loading,users,error}=data
  console.log(data,'ccccccc')
  // const [apiData,setApiData] =useState(data)
// console.log(apiData,'lllllllllllllllllllll')



// useEffect(()=>{
//    dispatch(apiRequest())
// },[dispatch])

  return (
    
<div>
<h1>sssss</h1>

{
  loading?<h1>loading</h1>:error? <h1>{error}</h1>:
  users.map((item)=>{
    return(
     <Table>
<td>
  <th>name</th>
  <th>email</th>
</td>
<tr>
  {item.name}
  {item.email}
</tr>
     </Table>
    )
     
    
  })
    
  
}

<button onClick={()=>dispatch(apiRequest())}>ddddddd</button>


 
</div>
  );
}

export default App;
