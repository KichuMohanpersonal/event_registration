import React, { Component } from 'react'
import Axios from 'axios'

class Profile extends Component{

    constructor(props){
        super(props)

            this.state = {
                dance:'No',
                music:'No',
                chess:'No',
                carroms:'No',
                hipop:'No',
                details:[]
            }

            const token = localStorage.getItem("token");
           
            if(!token){
                this.props.history.push("/login");
            }
            const config = {
                headers:{
                    'Auth-Token':token,
                }
            }
        Axios.get('http://localhost:3000/api/profile',config)
        .then(response =>{
            console.log(response.data);
            this.setState({details:response.data});
        })
           

       
    }

    

    changeHandler = e => {
        this.setState({[e.target.name]:[e.target.value]});
    }

    clickHandler = e =>{
        localStorage.removeItem("token");
        this.props.history.push('/login');
    }

    submitHandler =e =>{

        
        console.log(this.state.dance);

        Axios.post("http://localhost:3000/api/submitchange",{
            user:String(this.state.details.id),
            dance:String(this.state.dance),
            music:String(this.state.music),
            chess:String(this.state.chess),
            carroms:String(this.state.carroms),
            hipop:String(this.state.hipop),
        })
        .then(res =>{
            console.log("yshshshs");
        })
        .catch(error=>{
            console.log(error);
        })
    }



    render(){
        const {details,dance,music,chess,carroms,hipop} = this.state;

        return(
            <div >
                <div className="navbr">
                  <ul>
                    <li className="Logout"><button onClick={this.clickHandler}>Logout</button></li>                    
                 </ul>
                </div>

                <div >

                    <h1 >Welcome!</h1>  
                    <h3>You have registerd for:</h3>
                        <div className="old">
                                <h4>Dance: {details.dance}</h4>
                                <h4>Music: {details.music}</h4>
                                <h4>Chess: {details.chess}</h4>
                                <h4>Carroms: {details.carroms}</h4>
                                <h4>Hip pop: {details.hipop}</h4>
                        </div>
                    <h3>Select Yes to register Event</h3>
                    <div className="pro">
                        <form onSubmit={this.submitHandler}>
                            {/* <label><h3>Dance</h3>
                                <input type="radio" name="dance" value="Yes" />
                                <label>Yes</label>
                                <input type="radio" name="dance" value="No" />
                                <label>No</label>
                            </label> */}

                            <h3>Dance</h3>
                            <select name="dance" value={dance} onChange={this.changeHandler}>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                            <h3>Chess</h3>
                            <select name="chess"  value={chess} onChange={this.changeHandler} >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                                
                            </select>
                            <h3>Music</h3>
                            <select name="music"  value={music} onChange={this.changeHandler} >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                            <h3>Carroms</h3>
                            <select name="carroms"  value={carroms} onChange={this.changeHandler} >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                            <h3>Hip Pop</h3>
                            <select name="hipop"  value={hipop} onChange={this.changeHandler} >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select><br/>
                            <br/>
                            <input type="submit" value="Save"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Profile;