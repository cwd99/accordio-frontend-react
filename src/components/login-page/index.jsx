import React from 'react'

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
            <section>
                Login
            </section>
        )
        }
    
}

export default LoginPage