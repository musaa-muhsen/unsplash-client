import React from 'react';

const  ImageList = ({imagesProp}) => {
   //const [image, setImage] = useState(imagesProp.results)
   console.log(imagesProp)
   //[books, setBooks] =
   //const imagesForRender = props.results
//    useEffect(() => {
//    const imageResults = imagesProp.results;
//    console.log(imageResults)
      const imgs = imagesProp.map(img => {
           return <img key={img.id} src={img.urls.small} alt={img.alt_description} />
        })
//     })


    return ( 
    
         <div>{imgs}</div>
     );
}
 
export default ImageList;