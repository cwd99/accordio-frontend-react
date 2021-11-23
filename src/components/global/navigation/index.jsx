import React, { useEffect, useState, useRef } from 'react'
import Avatar from '@material-ui/core/Avatar'
import avatar from '../../../images/avatar.png'
import Menu from '@material-ui/core/Menu'
import { InputBase, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import AccountMenu from './account-menu'
import NotificationsMenu from './notifications-menu'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {

    const [registered, setRegistered] = useState(false)
    const [registrationPages, setRegistrationPages] = useState(false)
    const [loginPages, setLoginPages] = useState(false)

    const [showSearch, setShowSearch] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [accountAnchorEl, setAccountAnchorEl] = useState(null)
    const accountRef = useRef();
    const accountOpen = Boolean(accountAnchorEl);
    const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null)
    const notificationsRef = useRef();
    const notificationsOpen = Boolean(notificationsAnchorEl);

    const { pathname } = useLocation();

    const useStyles = makeStyles((theme) => ({
        avatar: {
            'margin-right': theme.spacing(1.5)
        },
        menuItem: {
            'padding-right': theme.spacing(2.5),
            'line-height': '24px',
            "&:hover": {
                backgroundColor: 'transparent'
            }
        },
        divider: {
            'margin-top': theme.spacing(2),
            'margin-bottom': theme.spacing(2)
        }
    }));

    const classes = useStyles();

    const checkCurrentUrlPath = () => {
        const registerPaths = ['/create-account', '/email-verification', '/complete-account']
        if (registerPaths.includes(pathname)) {
            setRegistered(false)
            setRegistrationPages(true)
            setLoginPages(false)
        } else if (pathname === "/login-page") {
            setRegistered(false)
            setRegistrationPages(false)
            setLoginPages(true)
        } else if (pathname === "/home") {
            setRegistered(true)
            setRegistrationPages(false)
            setLoginPages(false)
        } else {
            setRegistered(false)
            setRegistrationPages(false)
            setLoginPages(false)
        }
    }

    const search = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        checkCurrentUrlPath()

        function handleResize() {
            if (window.innerWidth >= 600) {
                setMobileMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [mobileMenuOpen, pathname])

    const handleClick = (event, type) => {
        if (type === 'account') {
            setAccountAnchorEl(accountRef.current)
        }
        else {
            setNotificationsAnchorEl(notificationsRef.current)
        }
    };

    const handleClose = () => {
        setAccountAnchorEl(null)
        setNotificationsAnchorEl(null)
    };

    const handleMobileMenu = () => {
        if (mobileMenuOpen) {
            setMobileMenuOpen(false)
        } else {
            setMobileMenuOpen(true)
        }
    }

    const searchbar = () => {
        return (
            <form method="get" onSubmit={e => search(e)}>
                <div className="search-bar">
                    <InputBase
                        placeholder="Search for everything case studies here"
                        inputProps={{ 'aria-label': 'search for everything case studies here' }}
                        name="q"
                        fullWidth={true}
                    />
                    <IconButton type="submit" aria-label="search">
                        <i className="fas fa-search"></i>
                    </IconButton>
                </div>
            </form>
        )
    }

    let navbarLinks = '';
    if (!registered) {
        if (registrationPages) {
            navbarLinks = <li><Link to='/login-page'>Already a member?</Link></li>
        }
        else if (loginPages) {
            navbarLinks = ''
        }
        else {
            navbarLinks = <>
                <li>
                    {mobileMenuOpen ?
                        searchbar()
                        : <i className="fas fa-search" onClick={() => setShowSearch(true)}></i>
                    }
                </li>
                <li><Link to='/login-page'>Sign In</Link></li>
                <li>
                    <Link to="/create-account"><button className="blue-btn btn-filled btn-small">Get Started</button></Link>
                </li>
            </>
        }
    } else {
        navbarLinks = <>
            <li onClick={() => setShowSearch(true)}>
                {mobileMenuOpen ?
                    searchbar()
                    : <i className="fas fa-search"></i>
                }
            </li>
            <li onClick={(e) => handleClick(e, 'notifications')} ref={notificationsRef}>
                {mobileMenuOpen && <Badge badgeContent=" " color="error" variant="dot" style={{ 'marginRight': 20 }}></Badge>}
                <Badge badgeContent={mobileMenuOpen ? 0 : 3} color="error" overlap="circular">
                    <i className="far fa-bell fa-lg"></i>
                </Badge>
                <span className="label">{mobileMenuOpen ? 'Notifications' : ''}</span>
            </li>
            <li>
                <Link to="create-case-study"><button className="blue-btn btn-outlined btn-small">Create</button></Link>
            </li>
            <li onClick={(e) => handleClick(e, 'account')} ref={accountRef}>
                <IconButton disableRipple style={{ backgroundColor: 'transparent', padding: 0 }}>
                    <Avatar alt="" src={avatar} />
                </IconButton>
                <span className="label">{mobileMenuOpen ? 'Gabriel Garcia' : ''}</span>
            </li>
        </>
    }

    return (
        <>
            <header className={`nav ${mobileMenuOpen ? 'mobile' : ''} ${!registered ? 'nav-blue' : ''}`}>
                <div className='container'>
                    <div className="nav-main">
                        <Link className='logo' to='/'>Accordio</Link>
                        <div className="mobile-menu-icon" onClick={handleMobileMenu}>
                            {mobileMenuOpen ? <span>&#10005;</span> : <i className="fas fa-bars"></i>}
                        </div>
                        <ul className="nav-menu">
                            {navbarLinks}
                        </ul>
                    </div>
                    {showSearch ?
                        <form method="get" onSubmit={e => search(e)}>
                            <div className="search">
                                <InputBase
                                    placeholder="Search for everything case studies here"
                                    inputProps={{ 'aria-label': 'search for everything case studies here' }}
                                    name="q"
                                    autoFocus
                                />
                                <IconButton aria-label="close" onClick={() => setShowSearch(false)}>
                                    &#10005;
                                </IconButton>
                            </div>
                        </form>
                        : null
                    }

                    <Menu
                        open={accountOpen || notificationsOpen}
                        anchorReference={mobileMenuOpen ? 'anchorPosition' : 'anchorEl'}
                        anchorPosition={{ top: 0, left: 0 }}
                        anchorEl={accountAnchorEl || notificationsAnchorEl}
                        onClose={() => handleClose()}
                        disableScrollLock={true}
                        getContentAnchorEl={null}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        PaperProps={{
                            style: {
                                marginTop: `${mobileMenuOpen ? 0 : (notificationsOpen ? '30px' : '25px')}`,
                                boxShadow: '0px 1px 10px rgba(26, 33, 182, 0.3)',
                                borderRadius: '8px',
                                borderLeft: '10px solid #E8E8F8',
                                width: `${notificationsOpen ? '420px' : '185px'}`
                            }
                        }}
                        className={notificationsOpen ? 'notificationsMenu' : ''}
                    >
                        {
                            accountOpen && (
                                <AccountMenu
                                    menuItem={classes.menuItem}
                                    avatar={classes.avatar}
                                    name={classes.name}
                                    subText={classes.subText}
                                    divider={classes.divider}
                                    menuItemBottom={classes.menuItemBottom}
                                />
                            )
                        }
                        {
                            notificationsOpen && (
                                <NotificationsMenu
                                    menuItem={classes.menuItem}
                                    avatar={classes.avatar}
                                    name={classes.name}
                                    subText={classes.subText}
                                    mobileMenuOpen={mobileMenuOpen}
                                />
                            )
                        }
                    </Menu>
                </div>
            </header>
        </>
    )
}

export default Navigation