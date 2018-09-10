import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Data from './Components/login';
import About from './Components/Aboutus';
import Area from './Components/area';

// import Routes from './Routes';

// class App extends React.Component {
//     render() {
// return(
//     <Router>
//         <Route path={login} component={login} />
//         <Route path={area} component={area} />
//         </Router>
// );
//     }
// }
// ReactDOM.render(<App />, document.getElementById('roottwo'));



// hare are the working 
class Header extends React.Component {
    render() {
        return (
            <div>
                <div id="header">
                    <h2 id="heading"> <i> Car Parking Website </i> </h2>
                    <div id="buttons">
                        <button id="one"> Sign Up  </button> &nbsp;&nbsp;&nbsp;
                            <button onclick="go"> User logIn
                             </button>
                    </div>
                </div>
            </div>
        );
    }
}

class Image extends React.Component {
    render() {
        return (
            <div> <br />
                <div id='image'>
                    <img src="https://www.causewaycoastandglens.gov.uk/uploads/carousel/_Crop/cbd_carpark.jpg" alt="Image" />
                </div>
            </div>
        )
    }
}
class Signup extends React.Component {
    getdata(){
     fetch('/user/signup',{
         Name :this.state.name


     })   
    }
    render() {
      
        return (
            <div>
                <span id="rightside"> <br />
                    <h2 id="title"> Sign Up </h2> <br />
                    <div id="form">
                        <form>
                            <span id="labels"> Name </span> <br />
                            <input type="text" id="input" name="username" /> <br />

                            <span id="labels"> Email </span> <br />
                            <input type="text" id="input" name="username" /> <br />

                            <span id="labels"> Password </span> <br />
                            <input type="password" id="input" name="username" /> <br />

                            <input type="button" value="Sign Up" id="submit" name="submit" /> <br />

                        </form>  </div>
                </span>
            </div>
        )
    }
}

const main = (
    <div>
        <Header />
        <Image />
        <Signup />
        <About />
        <Area />
       

    </div>
)
ReactDOM.render(main, document.getElementById('root'));


