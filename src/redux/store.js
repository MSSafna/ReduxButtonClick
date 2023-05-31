import {createStore} from 'redux'


const intialState ={
  value :0
}

function appReducer(prev = intialState,action){
   if(action.type =='increment'){        
    return  prev+1 
   }else if(action.type == 'decrement'){
    return prev-1
   }else{
     return prev.value
   }
}

export const store = createStore(appReducer)

