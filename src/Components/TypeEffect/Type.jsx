import React from 'react';
import Typewriter from  'typewriter-effect';
import "./Type.scss" ;

const Type = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Web Developer', 'FULL Stack Developer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
  )
}

export default Type
