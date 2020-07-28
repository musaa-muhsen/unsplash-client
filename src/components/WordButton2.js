import React, {useContext, useState} from 'react';
import { WordContext } from '../contexts/RandomWordContext';



const WordButtonTwo = ({onButtonSubmit}) => {

    //const randomGen = Math.floor(Math.random() * 3);
    const {wordContextOne,wordContextTwo,wordContextThree,wordContextFour,wordContextFive,wordContextSix } =  useContext(WordContext);
    //const {wordsArr} =  useContext(WordContext);
    const [buttonData, setButtonData] = useState({data: ''});

  

    //onButtonSubmit(buttonData.data)
    const onInputChange = (event) => {
        console.log(event.target.value)
        setButtonData({data: event.target.value});
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onButtonSubmit(buttonData.data)
        //console.log(buttonData.data)
        setButtonData({data: ''});

    }

    return (    
        <div>
           <form onSubmit={onFormSubmit}>
               {/* <button onClick={() => setButtonData({ data: buttonOne })}>{buttonOne}</button> */}
               <button onClick={onInputChange} value={wordContextOne}>{wordContextOne}</button>
                <button onClick={onInputChange} value={wordContextTwo}>{wordContextTwo}</button>
                <button onClick={onInputChange} value={wordContextThree}>{wordContextThree}</button>  
                <button onClick={onInputChange} value={wordContextFour}>{wordContextFour}</button>
                <button onClick={onInputChange} value={wordContextFive}>{wordContextFive}</button>
                <button onClick={onInputChange} value={wordContextSix}>{wordContextSix}</button> 
  
           </form> 
       </div>
     );
}
 
export default WordButtonTwo;