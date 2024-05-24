import React, { useState } from 'react'
import Context from './Context'

const Mycontextprovider = ({children}) => {

    const [hello , setHello] = useState(false);
  return (
    <div>
      <Context.Provider value={{hello}}>

        {children}
      </Context.Provider>
    </div>
  )
}

export default Mycontextprovider
