import React, { Component } from 'react';
import Profile from "./profile"
import Axios from 'axios'
import { browserHistory } from 'react-router';
import Nav from './navi'


class login extends Component{
    constructor(props){
        super(props)
        // localStorage.removeItem("token");
        this.state = {
            username:'',
            password:'',
        }
    }
    changeHandler = e => {
        this.setState({[e.target.name]:[e.target.value]});
    }

    submitHandler = e => {
         e.preventDefault();

        Axios.post('http://localhost:3000/api/login',{
            email:String(this.state.email),
            password:String(this.state.password)
        })
        .then(response => {
            localStorage.setItem("token",response.data);
            // console.log(response.data);
            this.props.history.push('/profile');
        })

    }


    render(){
        const {email,password} = this.state;
    return(
        <div>
            <Nav />
            <form onSubmit={this.submitHandler} >
                <div className="log_form">
              <label>Email: <input type="text" name="email" value={email} onChange={this.changeHandler} /></label>
              <label>Password: <input type="text" name="password" value={password} onChange={this.changeHandler}/></label>
                  
                <input className="ip" type="submit" value="Login"/>
                </div>
            </form>

        </div>
    );
    }
}

export default login;