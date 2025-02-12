import React from 'react'
import Child1Context from './contextcomponent/Child1Context';
const mycontext=createContetxt();

function AppContext() {
    const data={
        name:"harshit",
        branch:"cse",
        section:"b"
    }
    

    
  return (
    <div>AppContext
        <UserContext.Provider value={data}>
      <Child1Context />
    </UserContext.Provider>
    </div>
  )
}
export{
    mycontext
}

export default AppContext
