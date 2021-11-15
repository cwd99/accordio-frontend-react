import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const hideFooterPaths = ['/login-page', '/create-account', '/email-verification', '/complete-account']

    if (!hideFooterPaths.includes(window.location.pathname)) {
        return (
            <section className={`footer ${window.location.pathname === "/" ? 'footer-blue' : 'footer-gray'}`}>

                <div className='container'>
                    <ul className='footer-top'>
                        <li><Link className='footer-top__logo' to='/'>Accordio</Link></li>
                        <li><a href="/">Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/create-account'>Join Accordio</a></li>
                        <li><a href='/login-page'>Sign In</a></li>
                    </ul>

                    <hr className='footer-midline' />

                    <div className='footer-bottom'>
                        <span>&copy; 2021 Accordio. All Rights Reserved</span>
                        <ul>
                            <li><a href='/terms-and-conditions'>Terms</a></li>
                            <li><a href='/privacy'>Privacy</a></li>
                        </ul>
                    </div>
                </div>

            </section>
        )
    }
    return null;
}

export default Footer