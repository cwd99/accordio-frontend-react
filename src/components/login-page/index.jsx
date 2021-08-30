import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
            this.state={
            username:'',
            password:''
    
        }   
    }
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange = {(event,newValue) => 
                            this.setState({username:newValue})}
                        />
                    </div>                   
                </MuiThemeProvider>
            </div>
        )
        }
    
}

export default LoginPage