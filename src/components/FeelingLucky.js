import React, {useState, useContext} from 'react';
import { WordContext } from '../contexts/RandomWordContext';

const FeelingLucky = ({onButtonSubmit}) => {
    const {wordContextSeven } = useContext(WordContext);
    
   
    const [feelLuckyState, setFeelLuckyState] = useState({data: ''})


   const onInputChange = (event) => {
        setFeelLuckyState({data: event.target.value})
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onButtonSubmit(feelLuckyState.data)       
        setFeelLuckyState({data: ''});      
    }

    return ( 
        <div>
            <form onSubmit={onFormSubmit}>
           <button onClick={onInputChange} value={wordContextSeven}>I'm Feeling Lucky</button>
           </form> 
        </div>
     );
}
 
export default FeelingLucky;