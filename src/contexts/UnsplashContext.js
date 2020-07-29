import React, { useState, createContext } from 'react';

export const UnsplashContext = createContext();

const UnsplashContextComp = (props) => {
   
  const [images, setImages ]= useState([]);
  //const [noImages, setNoImages] = useState(false)
  console.log(images)

   const onSearchSubmit = async (word) => {
      const response = await fetch(`/api/${word.val}`);
      const data = await response.json();
      setImages(data.results)
   }


const onButtonSubmit = async (word) => {
   const response = await fetch(`/api/${word}`);   
   const unsplashData = await response.json();
   setImages(unsplashData.results)
  }

 /*
     fetch(`/api/car`).
     then(response => response.json()).
     then(data => console.log(data))  
   */ 

    return ( 
        <UnsplashContext.Provider value={{onButtonSubmit, onSearchSubmit, images}}>
            {props.children}
        </UnsplashContext.Provider>
     );
}
 
export default UnsplashContextComp;