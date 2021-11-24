import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const hideFooterPaths = ['/login-page', '/create-account', '/email-verification', '/complete-account']

    if (!hideFooterPaths.includes(window.location.pathname)) {
        return (
            <section className={`footer ${window.location.pathname === "/" ? 'footer-blue' : 'footer-gray'}`}>

                <div className='container'>
                    <ul className='footer-top'>
                        <li className='footer-top__logo'>Accordio</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/create-account'>Join Accordio</Link></li>
                        <li><Link to='/login-page'>Sign In</Link></li>
                    </ul>

                    <hr className='footer-midline' />

                    <div className='footer-bottom'>
                        <span>&copy; 2021 Accordio. All Rights Reserved</span>
                        <ul>
                            <li><Link to='/terms-and-conditions'>Terms</Link></li>
                            <li><Link to='/privacy'>Privacy</Link></li>
                        </ul>
                    </div>
                </div>

            </section>
        )
    }
    return null;
}

export default Footer