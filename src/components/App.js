import React, { useState } from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import RandomWordContext from '../contexts/RandomWordContext';
import WordButtonTwo from './WordButton2';
import FeelingLucky from './FeelingLucky';



const App = () => {
 
  const [images, setImages ]= useState([]);
  
   const onSearchSubmit = async (word) => {
    console.log(word.val)
    const response = await fetch(`/api/${word.val}`);
    const data = await response.json();
    console.log(data)
    setImages(data.results)
   }


const onButtonSubmit = async (word) => {
   console.log(word)
   //const response = await fetch('/api/images');
   const response = await fetch(`/api/${word}`);   
   const unsplashData = await response.json();
   console.log(unsplashData)
   setImages(unsplashData.results)
  }

  
  return ( 
    <div className="App"> 
    <RandomWordContext>   
       <div className="search-main-container">
           <SearchBar onSearchSubmit={onSearchSubmit} onButtonSubmit={onButtonSubmit}/>    
            
       </div>
       <FeelingLucky onButtonSubmit={onButtonSubmit} /> 
          <WordButtonTwo onButtonSubmit={onButtonSubmit} />            
    </RandomWordContext>
           <ImageList imagesProp={images} /> 
    </div>
   );
}
 

export default App;












  // useEffect(() => {
      
  // });
  // const [images, setImages ]= useState([])

  // .then(response => response.json())
  // .then(data => console.log(data));

  // fetch('/api/customers')
  // .then(res => res.json())
  // .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
   /*
  const onSearchSubmit = (word) => {
        console.log(word.val)
  }
    */

    //const response = await fetch(`https://api.unsplash.com/search/photos?query=wanderlust&client_id=BgwLpezqvGtqHU5Q23sXjv0kJSebWvOoG_3fKA6ALOs`)
   //const response = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${word.val || "pool"}&client_id=${API_KEY}`);

   //import "./styles.scss";
//import WordButtons from './WordButtons';

//$ curl https://api.unsplash.com/photos/random?count=5 █
// &query=${'flower'}
// https://api.unsplash.com/search/photos?page=5&per_page=30&query=${inputValue}&client_id=${API_KEY}

 //  const API_KEY = 'BgwLpezqvGtqHU5Q23sXjv0kJSebWvOoG_3fKA6ALOs';
// if (search or randomWord) { }


    //const response = await fetch('/api/images');
