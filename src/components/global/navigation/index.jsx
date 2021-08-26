import React from 'react'

class Navigation extends React.Component {
    
    constructor(){
        super()
        this.state = {
            registrationNavColor: false
        }
    }

    checkCurrentUrlPath = () => {
        let currentPath = window.location.href
        currentPath = currentPath.split("/")
        const arrayLength = currentPath.length - 1
        currentPath = currentPath[arrayLength] 
        
        if((currentPath === "create-account") || (currentPath === "email-verification") || (currentPath === "complete-account")){
            console.log('right path')
            this.setState({
                ...this.state,
                registrationNavColor: true
            })
        } else {
            this.setState({
                ...this.state,
                registrationNavColor: false
            })
        }

        console.log("asdf", currentPath) 
    }

    returnCorrentNav = () => {
        if(this.state.registrationNavColor){
            return(
                <ul className='nav-alt-color'>
                    <li><a className='logo' href='/'>ACCORDIO</a></li>
                    <li><a className='push' href='/search'>Search</a></li>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/create-account'><button className='get-started-btn'>Get Started</button></a></li>
                </ul>
            )
        } else {
            return (
                <ul className='nav-main'>
                    <li><a className='logo' href='/'>ACCORDIO</a></li>
                    <li><a className='push' href='/search'>Search</a></li>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/create-account'><button className='get-started-btn'>Get Started</button></a></li>
                </ul>
            )
        }
    }

    componentDidMount(){
        this.checkCurrentUrlPath()
    }

    render(){
        return(
            <section>
                { this.returnCorrentNav() }
            </section>
        )
    }
}

export default Navigation