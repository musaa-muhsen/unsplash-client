import React , {createContext} from 'react';

export const WordContext = createContext();

const RandomWordContext = (props) => {

    const randomGen = Math.floor(Math.random() * 17);

    const wordsArr1 = ['stars','milky way','moon','space','universe',
    'night sky','aurora','nebula','outer space','','',
    '','','','','',''];

    const wordsArr2 = ['red','yellow','blue','brown','orange',
    'green','violet','black','pink','blue green','violet',
    'white','crimson','navy','yellow green','scarlet','grey'];

    const wordsArr3 = ['car','football','classic car','ship','boat',
    'stadium','gym','','yoga','basketball','',
    '','','','','',''];

    const wordsArr4 = ['portrait','face','smile','sad','woman',
    'man','model','face','hair','','',
    '','','','','',''];

    const wordsArr5 = ['texture','living room','wood background','background texture','abstract',
    'pattern','geometric','door','apartment','house','street',
    'architecture','urban','office building','city ','',''];

    const wordsArr6 = ['new york','athens','tokyo','delhi','mexico city',
    'cairo','sao paulo','istanbul','rio de janeiro','paris','london',
    'jakarta','seoul','madrid','toronto','barcelona','miami'];

    const wordsArr7 = ['film','movie','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordsArr8 = ['moon','stars','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordsArr9 = ['moon','stars','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordsArr10 = ['moon','stars','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordsArrL  = ['moon','stars','sky','galaxy','dark',
    'light','aurora','milky way','pink','red','blue',
    'green','crimson','orange','blue','black','grey'];

    const wordContextOne = wordsArr1[randomGen];
    const wordContextTwo = wordsArr2[randomGen];
    const wordContextThree = wordsArr3[randomGen];
    const wordContextFour = wordsArr4[randomGen];
    const wordContextFive = wordsArr5[randomGen];
    const wordContextSix = wordsArr6[randomGen];
    const wordContextSeven = wordsArr7[randomGen];
    const wordContextEight = wordsArr8[randomGen];
    const wordContextNine = wordsArr9[randomGen];
    const wordContextTen = wordsArr10[randomGen];

    const wordContextLucky = wordsArrL[randomGen];
    
    
    return ( 
        <WordContext.Provider value={{wordContextOne,wordContextTwo,wordContextThree,wordContextFour,wordContextFive,wordContextSix,wordContextSeven,wordContextEight,wordContextNine,wordContextTen,wordContextLucky}}>
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