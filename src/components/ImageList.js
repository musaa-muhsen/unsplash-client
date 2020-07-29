import React , {useContext, useEffect} from 'react';
//import {v4} from 'uuid';
//import NoImage from './NoImage';
import { UnsplashContext} from '../contexts/UnsplashContext';


const ImageList = () => {

  const { images} = useContext(UnsplashContext);
  console.log(images);

  useEffect(() => {
    console.log('rendered')
}, []);

  const imageOutcome = images.length === 0 ? (
   <div className="no-image-container"> 
   <h1>No images!</h1>
   </div>  
  ) : (
         images.map(img => {
      return (    
<img key={img.id} src={img.urls.small} alt={img.alt_description} />
             )
        })
  )

  /*
  const imgs = images.map(img => {
        return (    
<img key={img.id} src={img.urls.small} alt={img.alt_description} />
               )
          });
*/
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