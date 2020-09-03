import React, { Component } from 'react';
import Axios from 'axios';
import Nav from './navi'


class Register extends Component{
    constructor(props){
        super(props)

        this.state ={
            username:'',
            email:'',
            password:'',
            phone:'',
        }
    }

    changeHandler = e =>{
        this.setState({[e.target.name]:[e.target.value]});
    }

    SubmitHandler = e =>{
        e.preventDefault();
        
        Axios.post('http://localhost:3000/api/register',{
            username:String(this.state.username),
            password:String(this.state.password),
            email:String(this.state.email),
            phone:String(this.state.phone)
        })
        .then(response => {
            console.log(response.data);
            alert("Regestred Successfuly!");
            this.props.history.push("/login");
            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    



    render(){
        const {username,email,password,phone} = this.state;

        return(
            <div>
                 <Nav />
            <div className="log_form">
                 <form onSubmit={this.SubmitHandler}>
                   <label>UserName:<input type="text" name="username" value={username} onChange={this.changeHandler}/></label>
                   <label>Password: <input type="text" name="password" value={password} onChange={this.changeHandler}/></label>
                   <label>Email: <input type="text" name="email" value={email} onChange={this.changeHandler} /></label>
                   <label>Phone: <input type="text" name="phone" value={phone} onChange={this.changeHandler} /></label>
                   <br/>
                    <input class="ip" type="submit" value="Register"/>
                </form>
    
            </div>
            </div>
        );
    }
}

export default Register