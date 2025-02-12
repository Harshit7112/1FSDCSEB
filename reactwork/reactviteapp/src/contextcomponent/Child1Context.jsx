import React, { useContext } from 'react'
import { mycontext } from '../AppContext';

function Child1Context() {
    const child1=useContext(mycontext);
  return (
    <div>Child1Context
        Name:{child1.name}
    </div>
  )
}

export default Child1Context