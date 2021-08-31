// import React from 'react'

// class CompleteAccount extends React.Component {

//     goToHome = () => {
//         this.props.history.push('/')
//     }

//     render(){
//         return(
//             <section className='complete-account'>
//                 <form className='complete-account__form'>
//                     <h1>Great! Your email is verified. Let's finish setting up your account.</h1>

//                     <label className='complete-account__form-input-text-label'>What is your full name?</label><br />
//                     <input 
//                         className='complete-account__form-input-text' 
//                         placeholder='   Gabriela Garcia' 
//                     /><br />

//                     <label className='complete-account__form-input-text-label'>Username</label><br />
//                     <input 
//                         className='complete-account__form-input-text' 
//                         placeholder='   gabriela.garcia' 
//                     /><br />

//                     <label className='complete-account__form-input-checkbox-pronouns-label'>What are your pronouns?</label><br />
//                     <input 
//                         className='complete-account__form-input-checkbox' 
//                         type='checkbox' 
//                     /><label 
//                         className='complete-account__form-input-checkbox-label'>She/her/hers</label><br />
//                     <input 
//                         className='complete-account__form-input-checkbox' 
//                         type='checkbox' 
//                     /><label className='complete-account__form-input-checkbox-label'>He/him/his</label><br />
//                     <input 
//                         className='complete-account__form-input-checkbox' 
//                         type='checkbox' 
//                     /><label className='complete-account__form-input-checkbox-label'>They/them/theirs</label><br />
//                     <input 
//                         className='complete-account__form-input-checkbox' 
//                         type='checkbox' 
//                     /><label className='complete-account__form-input-checkbox-label'>Other (please type below):</label><br />
//                     <input 
//                         className='complete-account__form-input-text' 
//                         placeholder='    first/second/third' 
//                     /><br />
                    
//                     <button onClick={this.goToHome} className='complete-account__form-button'>Create Account</button>
//                 </form>
//             </section>
//         )
//     }
// }

// export default CompleteAccount

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;