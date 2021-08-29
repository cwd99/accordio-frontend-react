import React from 'react'

class Footer extends React.Component {
    render(){
        return(
            <section className='footer'>
                
                {/* <ul className='footer-top'>
                    <li><a className='footer-top__logo' href='/'>Accordio</a></li>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/create-account'>Join Accordio</a></li>
                    <li><a href='/sign-in'>Sign In</a></li>
                </ul>
                
                <hr className='footer-midline' /> */}
                
                <ul className='footer-bottom'>
                    <li>&copy; 2021 Accordio. All Rights Reserved</li>
                    <li><a className='footer-bottom__push' href='/terms-and-conditions'>Terms</a></li>
                    <li><a href='/privacy'>Privacy</a></li>
                </ul>
            
            </section>
        )
    }
}

export default Footer