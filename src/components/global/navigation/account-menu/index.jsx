import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import avatar from '../../../../images/avatar.png'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
// import Link from '@material-ui/core/Link'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const AccountMenu = React.forwardRef((props, ref) => {

    const useStyles = makeStyles(() => ({
        name: {
            'font-weight': 600,
            'font-size': '13px',
            'letter-spacing': '0.25px',
            'padding-bottom': '5px'
        },
        subText: {
            'font-size': '10px',
            'line-height': '12px',
            'color': '#4F4F4F'
        },
        menuItemBottom: {
            'font-size': '16px',
            'line-height': '24px',
            'min-height': 'auto',
            "&:hover": {
                backgroundColor: 'transparent',
                opacity: 0.75
            }
        },
        menuItemLink: {
            'text-decoration': 'none',
            'color': '#1A21B6',
            "&:hover": {
                'text-decoration': 'underline',
                cursor: 'pointer',
                opacity: 0.75
            }
        }
    }));

    const classes = useStyles();

    const accountLinks = [
        { 'name': 'Profile', 'link': '/' },
        { 'name': 'Edit Profile', 'link': '/' },
        { 'name': 'My Library', 'link': '/' },
        { 'name': 'Followers', 'link': '/' },
        { 'name': 'Settings', 'link': '/' },
        { 'name': 'Sign Out', 'link': '/' }
    ]

    return (
        <>
            <MenuItem className={props.menuItem} disableRipple ref={ref}>
                <Avatar src={avatar} className={props.avatar} />
                <div>
                    <div className={classes.name}>Gabriela Garcia</div>
                    <div className={classes.subText}>gabrielagarcia</div>
                </div>
            </MenuItem>

            <Divider className={props.divider} />

            {accountLinks.map((menu) => (
                <Link to={menu.link} key={menu.name} className={classes.menuItemLink} onClick={props.close}>
                    <MenuItem className={classes.menuItemBottom}>{menu.name}</MenuItem>
                </Link>
            ))}
        </>
    )
})

export default AccountMenu