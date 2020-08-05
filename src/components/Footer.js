import React from 'react';

const Footer = () => {

    const yearAndYears = new Date().getFullYear();
    console.log(yearAndYears)
    return ( 
        <footer><p>made by <a href="https://musaamuhsen.com/">musaamuhsen.com</a> &copy; {yearAndYears}</p></footer>
     );
}
 
export default Footer;