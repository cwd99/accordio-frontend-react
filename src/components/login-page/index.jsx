import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


class LoginPage extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
            
          <div>
            <Typography component="h1" variant="h5">
                Open doors with Accordio
            </Typography>
          
           <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             autoComplete="email"
             autoFocus
             hintText="Email"
             floatingLabelText="Enter your email"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
                
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Continue" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default LoginPage;