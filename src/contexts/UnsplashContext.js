import React, { useState } from 'react';

const UnsplashContext = (props) => {

    
    return ( 
        <WordContext.Provider value={{wordContextOne,wordContextTwo,wordContextThree,wordContextFour,wordContextFive,wordContextSix,wordContextSeven}}>
            {props.children}
        </WordContext.Provider>
     );
}
 
export default UnsplashContext;