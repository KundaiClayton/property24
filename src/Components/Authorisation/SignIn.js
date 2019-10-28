import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class SignIn extends Component {
    state={

    }
    submit=(e)=>{
        console.log(e)
    }
    change=(e)=>{
        console.log(e)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submit} className='Blue' >
                   <h5 className="black-text text-lighten-1">Login</h5> 
                   <div className="input-field">
                       <label htmlFor="email">Email</label>
                       <input type='email' id='email' onChange={this.change}/>
                   </div>
                   <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type='password' id='password' onChange={this.change}/>
                   </div>
                   <div className="input-field">
                       <button className="btn blue lighten-1">Login</button>
                      
                   </div>
                   <div className="input-field">
                       <Link to={'/registration'} className="btn red">Register</Link>
                      
                   </div>
                </form> 
            </div>
        )
    }
}
export default SignIn