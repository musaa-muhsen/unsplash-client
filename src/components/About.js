import React from 'react';
import { NavLink} from 'react-router-dom';

const  About = () => {
    return ( 
        <div className="about-main-container">
            <p>
            My aim for this project was to use the knowledge that I have gained recently in particular what I have learnt about JavaScript and React. This web app is built with React on the front end and I’m using a proxy server that being Node.js/Express technology to obtain
             api calls from the Unsplash API in order to keep the api key hidden. The 
             client side is fetching data from the proxy server at an end point created with Node.
              The main focus for this project was to learn how to use React for my own practise. 
              I used the most recent React features including Context API and numerous hooks 
              effectively. Another new challenge that I faced was deploying the app to the 
              world which I did via Git and GitHub. Thank you for checking out my web app 
              and if have any feedback you can email at musaamuhsen@gmail.com.
            </p>
            <h2><NavLink activeClassName="active-link" exact to="/">Go to search</NavLink></h2>

        </div>
     );
}
 
export default About;