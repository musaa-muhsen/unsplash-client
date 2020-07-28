import React , {createContext} from 'react';

export const WordContext = createContext();

const RandomWordContext = (props) => {

    const randomGen = Math.floor(Math.random() * 17);

    const wordsArr1 = ['moon','stars','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordsArr2 = ['moon','stars','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordsArr3 = ['moon','stars','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordsArr4 = ['moon','stars','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordsArr5 = ['moon','stars','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordsArr6 = ['moon','stars','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordsArr7 = ['moon','stars','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordContextOne = wordsArr1[randomGen];
    const wordContextTwo = wordsArr2[randomGen];
    const wordContextThree = wordsArr3[randomGen];
    const wordContextFour = wordsArr4[randomGen];
    const wordContextFive = wordsArr5[randomGen];
    const wordContextSix = wordsArr6[randomGen];
    const wordContextSeven = wordsArr7[randomGen];
    
    
    return ( 
        <WordContext.Provider value={{wordContextOne,wordContextTwo,wordContextThree,wordContextFour,wordContextFive,wordContextSix,wordContextSeven}}>
            {props.children}
        </WordContext.Provider>
     );
}
 
export default RandomWordContext;

/*

buttonTwo: randomWordContent2, buttonOne: randomWordContent
const word = [
                'moon','stars','night sky','galaxy','dark',
                'light','aurora','milky way','pink','red','blue',
                'green','crimson','orange','blue','black','grey'
            ]
*/

// const slicedWord1 = wordsArr.slice(0,3);
    // const randomWordContent =  slicedWord1[randomGen]

    // const slicedWord2 = wordsArr.slice(4,6);
    // const randomWordContent2 = slicedWord2[randomGen]