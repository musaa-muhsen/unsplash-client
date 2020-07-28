import React, { useState } from 'react';
//import TestImages from './TestImages';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import RandomWordContext from '../contexts/RandomWordContext';
import WordButtonTwo from './WordButton2';
import FeelingLucky from './FeelingLucky';
import './app.scss';
//import "./styles.scss";

//import WordButtons from './WordButtons';

//$ curl https://api.unsplash.com/photos/random?count=5 █
// &query=${'flower'}
// https://api.unsplash.com/search/photos?page=5&per_page=30&query=${inputValue}&client_id=${API_KEY}

const App = () => {
 
  const [images, setImages ]= useState([])
 //  const API_KEY = 'BgwLpezqvGtqHU5Q23sXjv0kJSebWvOoG_3fKA6ALOs';
// if (search or randomWord) { }
  
//console.log(images)
   const onSearchSubmit = async (word) => {
     console.log(word.val)
    //const response = await fetch('/api/images');
    const response = await fetch(`/api/${word.val}`);

    //const response = await fetch(`https://api.unsplash.com/search/photos?query=wanderlust&client_id=BgwLpezqvGtqHU5Q23sXjv0kJSebWvOoG_3fKA6ALOs`)
    //const response = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${word.val || "pool"}&client_id=${API_KEY}`);
    const data = await response.json();
    console.log(data)
    setImages(data.results)
   }


   const onButtonSubmit = async (word) => {
    console.log(word)
   //const response = await fetch('/api/images');
   const response = await fetch(`/api/${word}`);

   //const response = await fetch(`https://api.unsplash.com/search/photos?query=wanderlust&client_id=BgwLpezqvGtqHU5Q23sXjv0kJSebWvOoG_3fKA6ALOs`)
   //const response = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${word.val || "pool"}&client_id=${API_KEY}`);
   const unsplashData = await response.json();
   console.log(unsplashData)
   setImages(unsplashData.results)
  }

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
  return ( 
    <div className="App"> 
    <RandomWordContext>   
       <div className="search-container">
           <SearchBar onSearchSubmit={onSearchSubmit} onButtonSubmit={onButtonSubmit}/>    
           <FeelingLucky onButtonSubmit={onButtonSubmit} />  
        </div>
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