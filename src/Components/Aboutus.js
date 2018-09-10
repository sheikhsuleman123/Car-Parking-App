import React,{Component} from 'react';
import './comp.css';

class About extends Component {
    render() {
        return (
            <div>
            <div id="footer">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
             ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
             dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
             officia deserunt mollit anim id est laborum." <br /></p> <br/>
                  </div>
            <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.220221452608!2d73.10815792678595!3d31.43326775237382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226845b2c11d17%3A0x544b17e96c8891eb!2sMansoorabad%2C+Faisalabad%2C+Pakistan!5e0!3m2!1sen!2s!4v1521893290888"  allowfullscreen></iframe>
            </div>
            <div id="foot">
            <div id="links">
            <a href="https://www.google.com/">  Home </a> <br /><br />
            <a href="https://www.facebook.com/"> About Us</a> <br /><br />
            <a href="https://www.youtube.com/"> Contact Us Here </a> <br /><br />
            <a href="https://www.facebook.com/"> 032112345678</a> 
          </div>  <div id="prov">
                 <center>
                    <p>  All Right Reserved </p> 
                    <p> 24-3-2018 Final </p><br/>
                    <p> Faisalabad </p>   <br/>
                    <p> Sheikh Suleman </p>
                     </center>
                     </div>
            
    <div id="lastcar">
    <div id="for">
       <img src="https://cdn.dribbble.com/users/99313/screenshots/2343446/car-2_1x.jpg" /> 
        </div></div>
            </div>
            </div>
    
                    )
                }
}

export default About;