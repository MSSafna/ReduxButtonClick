import "./styles.css";
import {useSelector, useDispatch} from 'react-redux'

export default function App() {

  const value = useSelector((state) =>{
  
    return state
  })
   const dispatch = useDispatch()
  
   
  return (
    
      <div className="App">
      <button onClick={()=>dispatch({
        type:'increment'
      })}>increment</button>
      <h1>{value}</h1>
      <button onClick={()=>dispatch({
        type:'decrement'
      })}>decrement</button>
    </div>
    
  );
}
