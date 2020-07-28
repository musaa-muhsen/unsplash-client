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
        <div className="lucky-container">
            <form className="lucky-btn-form" onSubmit={onFormSubmit}>
              <button className="lucky-button" onClick={onInputChange} value={wordContextSeven}>Random Word</button>
           </form> 
        </div>
     );
}
 
export default FeelingLucky;