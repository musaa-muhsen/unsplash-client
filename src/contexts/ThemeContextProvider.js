import React, { createContext, useState, useEffect }  from 'react';
export const ThemeContext = createContext();

const ThemeContextProviderComp = (props) => {

  let [themeColor, setThemeColor] = useState(getInitialMode());
//
useEffect(() => {
  localStorage.setItem('dark', JSON.stringify(themeColor));
},[themeColor, setThemeColor]);

function getInitialMode() {
   const savedMode = JSON.parse(localStorage.getItem('dark'));
   return savedMode || false;
}

const toggleTheme = () => {      
  const themeColorBool = themeColor.isLightTheme === false ? true : false;
  console.log(themeColorBool)
   setThemeColor({
    // nested object literal
    isLightTheme: themeColorBool,
    light: {fontColor: '#555', uiElement: '#ddd', bg: '#eee'},
    dark:  {fontColor: '#ddd', uiElement: '#333', bg: '#555'}
})
}

console.log(themeColor)

  



    return ( 
        <ThemeContext.Provider value={{...themeColor,toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
     );

 
}
 
export default ThemeContextProviderComp;



 


    /*
     state = {
    isLightTheme: getInitialMode(),
    light: {fontColor: '#555', uiElement: '#ddd', bg: '#eee'},
    dark:  {fontColor: '#ddd', uiElement: '#333', bg: '#555'}

   }
   componentDidMount () {
    localStorage.setItem('dark', JSON.stringify(this.state.isLightTheme));
   }
   

  toggleThemeFunc = () => {
    this.setState({isLightTheme: !this.state.isLightTheme});
    //console.log(!this.state.isLightTheme)
  }

   getInitialMode = () => {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
}



    */
    