import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';


const ThemeToggle = (props) => {
   
    const {toggleTheme} = useContext(ThemeContext);
    return ( 
        <button onClick={toggleTheme}>toggle</button>
     );
}
 
export default ThemeToggle;