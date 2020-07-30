import React , {useContext, useEffect, useRef, useState} from 'react';
//import {v4} from 'uuid';
//import NoImage from './NoImage';
import { UnsplashContext} from '../contexts/UnsplashContext';

const ImageList = () => {

  const { images} = useContext(UnsplashContext);
  const [imgCurrent, setImgCurrent] = useState(0);
  const isInitialMount = useRef(true);

  useEffect(() => {
   if (isInitialMount.current) {
      isInitialMount.current = false;
   } else { 
      setImgCurrent(1);
   }
},[imgCurrent,setImgCurrent,isInitialMount,images]);



  const imageOutcome = images.length === 0 ? (
   imgCurrent === 1  ?  <div className="no-image-container"> 
   <h1>No images!</h1>
   </div>  : 
   <div ></div>
  ) : (
         images.map(img => {
      return (    
<img key={img.id} src={img.urls.small} alt={img.alt_description} />
             )
        })
  )

    return (     
         <div className="image-container">       
            {imageOutcome}          
         </div>
     );
}
 
export default ImageList;


/*
   //const [image, setImage] = useState(imagesProp.results)
   //[books, setBooks] =
   //const imagesForRender = props.results
//    useEffect(() => {
//    const imageResults = imagesProp.results;
//    console.log(imageResults)

<a style={{display: "block"}} href={img.links.download} download>
{}
{console.log(img.links.download_location)}
<button className="btn"> download</button>

</a>

*/

/* <div key={v4()} className="container-button"> */

/*
  if (noImages === true) {  
         return (
            <div className="no-image-container"> 
            <h1>No images!</h1>
            </div>        
         )
   }
{imagesProp, noImages}
*/

//   useEffect(() => {
//    document.querySelector('.no-image-container h1').style.display = "none";
//      console.log("first rendered!!!");
//   }, []);

  /*
  const imgs = images.map(img => {
        return (    
<img key={img.id} src={img.urls.small} alt={img.alt_description} />
               )
          });
*/

//console.log(imgCurrent);