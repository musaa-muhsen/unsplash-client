import React, { useState, createContext } from 'react';

export const UnsplashContext = createContext();

const UnsplashContextComp = (props) => {
   
  const [images, setImages ]= useState([]);
 

     const onSearchSubmit = async (word)=> {
           try {
            const response = await fetch(`/api/${word.val}`);
            const data = await response.json();
            setImages(data.results);
           } catch (err) {
             console.log(err)
           }     
        }


const onButtonSubmit = async (word) => {
    try {
   const response = await fetch(`/api/${word}`);   
   const unsplashData = await response.json();
   setImages(unsplashData.results)
   //console.log(unsplashData)
       } catch (err) { 
    console.log(err)
     }
  }

    return ( 
        <UnsplashContext.Provider value={{onButtonSubmit, onSearchSubmit, images}}>
            {props.children}
        </UnsplashContext.Provider>
     );
}
 
export default UnsplashContextComp;


  /*
useEffect(() => {
  if (isInitialMount.current) {
     isInitialMount.current = false;
  } else {
      console.log('worked!!!!!')
    
      async function onSearchSubmit (word) {
        console.log(word)
        const response = await fetch(`/api/${word.val}`);
        const data = await response.json();
        setImages(data.results);
    }
     
  }
},[images]);
*/

// useEffect(() => {
//     console.log('worked!!!!!')

 /*
     fetch(`/api/car`).
     then(response => response.json()).
     then(data => console.log(data))  
   */ 

    //const [noImages, setNoImages] = useState(false)
  
  //const isInitialMount = useRef(true);

  //     return onSearchSubmit;
     
// });
//
   
// try style display none 