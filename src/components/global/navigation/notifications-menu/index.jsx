import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import avatar from '../../../../images/avatar.png'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Menu from '@material-ui/core/Menu'
import { ListItemIcon, ListItemText } from '@material-ui/core'

const NotificationsMenu = React.forwardRef((props, ref) => {

    const useStyles = makeStyles(() => ({
        content: {
            width: '100%'
        },
        firstLine: {
            'display': 'flex'
        },
        name: {
            'font-size': '16px',
            'line-height': '24px'
        },
        time: {
            marginLeft: 'auto',
            marginRight: '15px',
            letterSpacing: '0.25px',
            'font-size': '13px'
        },
        subText: {
            letterSpacing: '0.25px',
            'font-size': '13px',
            'color': '#4F4F4F'
        },
        linkText: {
            color: '#1A21B6',
            fontSize: '16px'
        },
        showCaseStudyText: {
            'font-size': '13px',
            color: 'black',
            letterSpacing: '0.25px',
            margin: '10px 0'
        },
        moreActions: {
            '&:hover': {
                cursor: 'pointer'
            }
        }
    }));

    const classes = useStyles();

    const [submenuEl, setSubmenuEl] = useState(null)
    const [notifName, setNotifName] = useState(null)

    const openSubmenu = (event, name) => {
        setSubmenuEl(event.currentTarget)
        setNotifName(name.split(" ")[0])
    }

    const closeSubmenu = () => {
        setSubmenuEl(null)
    }

    const submenuOpen = Boolean(submenuEl)

    const notificationsMenu = [
        { 'type': 'mention', 'name': 'Gabriela Garcia', 'time': '53m', 'text': 'Re-designing the Whole Foods online shopping experience for shoppers during COVID-19' },
        { 'type': 'publish', 'name': 'Edison Stark', 'time': '23h', 'text': "How QuietBe is empowering parents with information about their baby's sleep cycles" },
        { 'type': 'follow', 'name': 'Lan Pham', 'time': '2d', 'text': "View Lan's profile" }
    ]

    const notificationsTypeText = [
        { 'type': 'mention', 'text': 'mentioned you as a contributor in' },
        { 'type': 'publish', 'text': 'published a case study' },
        { 'type': 'follow', 'text': 'started following you' }
    ]

    const notificationsActionsMenu = [
        { 'icon': 'fa-trash-alt', 'primaryText': 'Delete', 'secondaryText': 'Delete this notification' },
        { 'icon': 'fa-times-circle', 'primaryText': 'Unfollow', 'secondaryText': `Stop seeing ${notifName}'s updates` },
        { 'icon': 'fa-bell-slash', 'primaryText': 'Turn off', 'secondaryText': 'Stop receiving notifications like this' }
    ]

    return (
        <>
            {notificationsMenu.map((menu, index) => (
                <React.Fragment key={index}>
                    <MenuItem className={props.menuItem} style={{whiteSpace: 'normal'}} disableRipple alignItems="flex-start">
                        <Avatar src={avatar} className={props.avatar} />
                        <div className={classes.content}>
                            <div className={classes.firstLine}>
                                <div className={classes.name}>{menu.name}</div>
                                <div className={classes.time}>{menu.time}</div>
                                <div className={classes.moreActions} onClick={(e) => openSubmenu(e, menu.name)}><i className="fas fa-ellipsis-h"></i></div>
                            </div>
                            <div className={classes.subText}>{notificationsTypeText.find(notif => notif.type === menu.type).text}</div>
                            <div className={classes.linkText} nowrap="true">{menu.text}</div>
                            {menu.type === "mention" ? (<>
                                <div className={classes.showCaseStudyText}>Would you like to show this case study on your profile?</div>
                                <div>
                                    <button className="blue-btn btn-filled btn-small" style={{'marginRight': '10px'}}>
                                        Show
                                    </button>
                                    <button className="blue-btn btn-outlined btn-small">
                                        Hide
                                    </button>
                                </div>
                            </>) : null}
                        </div>
                    </MenuItem>

                    {index !== notificationsMenu.length - 1 ? <Divider className={props.divider} /> : null}
                </React.Fragment>
            ))}

            <Menu
                open={submenuOpen}
                anchorEl={submenuEl}
                onClose={closeSubmenu}
                disableScrollLock={true}
                getContentAnchorEl={null}
                transformOrigin={{ vertical: 'top', horizontal: `${props.mobileMenuOpen ? 'right' : 'left'}` }}
                anchorOrigin={{ vertical: 'top', horizontal: `${props.mobileMenuOpen ? 'left' : 'right'}` }}
                PaperProps={{
                    style: {
                        marginLeft: `${props.mobileMenuOpen ? '-18px' : '38px'}`,
                        marginTop: '-18px',
                        boxShadow: '0px 1px 10px rgba(26, 33, 182, 0.3)',
                        borderRadius: '8px',
                        width: 'auto'
                    }
                }}
            >
                {notificationsActionsMenu.map((menu) => (
                    <MenuItem className={`${props.menuItem} notificationsActionsMenu`} key={menu.primaryText}>
                        <ListItemIcon>
                            <i className={`far ${menu.icon}`}></i>
                        </ListItemIcon>
                        <ListItemText primary={menu.primaryText} secondary={menu.secondaryText} />
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
})

export default NotificationsMenu