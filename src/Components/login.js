import React, { Component } from 'react';
import './comp.css';

class Data extends Component {
    render() {
        return (
            <div id="maintwo">
                <h1> WelCome To the User Panel Login </h1>
                <br /><br />
                <h2 id="title"> Log In </h2> <br />
                <div id="form">
                    <form>
                        <span id="labels"> Email </span> <br />
                        <input type="text" id="input" name="username" /> <br />

                        <span id="labels"> Password </span> <br />
                        <input type="password" id="input" name="username" /> <br />

                        <input type="button" value="Sign Up" id="submit" name="submit" /> <br /><br />
                        <input type="button" value="Log Out" id="out" name="submit" /> <br />
                    </form>  </div>
            </div>
        )
    }
}

export default Data;