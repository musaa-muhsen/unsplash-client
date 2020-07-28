import React, { useState } from 'react';
//import { WordContext } from '../contexts/RandomWordContext';


const SearchBar = ({onSearchSubmit,onButtonSubmit}) => {
   // const {wordContextSeven } = useContext(WordContext);

    //console.log(userSubmit)
    const [search, setSearch] = useState({val: ''})
    //const [feelLuckyState, setFeelLuckyState] = useState({data: ''})


   const onInputChange = (event) => {
        setSearch({val: event.target.value});
        //setFeelLuckyState({data: event.target.value})
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(search)       
        setSearch({val: ''});       
    }

    //  onButtonSubmit(buttonData.data)
    //  const feelingLuckyOnInputChange = (event) => {
    //     console.log(event.target.value)
    //     setButtonData({data: event.target.value});
    // }

    // const feelingLuckyOnFormSubmit = (event) => {
    //     event.preventDefault();
    //     onButtonSubmit(feelLuckyState);
    //     
    // }
    return ( 
        <div>
            <form onSubmit={onFormSubmit}>
                 <label htmlFor="search"><h2>Image Search: </h2></label>
                 <input type="text" value={search.val} onChange={onInputChange} /> 
                 <button onChange={onInputChange} value={search}>Search</button>          
            </form>
        </div>
     );
}
 
export default SearchBar;