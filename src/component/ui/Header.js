import React, {useState, useEffect} from 'react'
import {
    AppBar, Toolbar, useScrollTrigger, Tabs, Tab, Button, Menu, MenuItem, useMediaQuery,
    SwipeableDrawer, IconButton, List, ListItem, ListItemText
} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/styles";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const {children} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        //^ menampilkan isi yg terhalang oleh Appbar
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        //    ^ membuat jarak margin menjadi 2em ketika layar berada di medium
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }

    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        //    ^ membuat logo menjadi 7em ketika layar berada di medium
        [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto"
        //    ^ mengubah tabs bar menjadi ke kanan
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        //    ^ jarak antara satu tab dengan tab lainnya
        marginLeft: "25px",
        //    ^ untuk menjaga konsistensi tiap tab di lain2 browser atau desktop
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: '0px',
        //    ^membuat kotak menu item tidak ada rouded
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        //    ^membuat ukuran text menuItem sama besar dengan ukuran tabs
        "&:hover": {
            opacity: 1
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        ...theme.typography.tab,
        "& .MuiListItemText-root": {
            opacity: 1,
        },
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    }
}))

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const [openDrawer, setOpenDrawer] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)

    const handleChange = (e, newValue) => {
        props.setValue(newValue)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null)
        setOpenMenu(false)
        props.setSelectedIndex(i)
    }
// eslint-disable-next-line
    const menuOptions = [
        {
            name: "Services",
            link: "/services",
            activeIndex: 1,
            selectedIndex: 0
        }, {
            name: "Custom Software Development",
            link: "/customsoftware",
            activeIndex: 1,
            selectedIndex: 1
        }, {
            name: "Mobile App Development",
            link: "/mobileapps",
            activeIndex: 1,
            selectedIndex: 2
        }, {
            name: "Website Development",
            link: "/websites",
            activeIndex: 1,
            selectedIndex: 3
        },
    ]
// eslint-disable-next-line
    const routes = [
        {
            name: "Home",
            link: "/",
            activeIndex: 0,
        },
        {
            name: "Services",
            link: "/services",
            activeIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: (e) => handleClick(e)
        },
        {
            name: "The Revolution",
            link: "/revolution",
            activeIndex: 2,
        },
        {
            name: "About Us",
            link: "/about",
            activeIndex: 3,
        },
        {
            name: "Contact Us",
            link: "/contact",
            activeIndex: 4,
        }
    ]

    useEffect(() => {
        //Digunakan untuk menjaga value dan url tetap sama ketika page di refresh.
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                case "/estimate":
                    props.setValue(5);
                    break;
                default:
                    break;
            }
        })
    }, [props.value, menuOptions, props.selectedIndex, routes, props])

    const tabs = (
        //ditampilkan ketika layar berukuran >= medium const matches = useMediaQuery(theme.breakpoints.down("md"))
        <>
            <Tabs
                value={props.value}
                onChange={handleChange}
                className={classes.tabContainer}
                indicatorColor={'primary'}
            >
                {/* indicatorColor => untuk menghilangkan garis bawah di tab dengan mengganti warna sama menjadi warna primary*/}
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-haspopup={route.ariaPopup}
                        aria-owns={route?.ariaOwns}
                        onMouseOver={route.mouseOver}
                    />
                ))}
            </Tabs>
            <Button variant={"contained"} color={'secondary'} className={classes.button}>
                Free Estimate
            </Button>
            <Menu id={"simple-menu"} anchorEl={anchorEl} open={openMenu}
                  onClose={handleClose}
                  MenuListProps={{onMouseLeave: handleClose}}
                  onClick={() => {
                      handleClose();
                      props.setValue(1)
                  }}
                  style={{zIndex: 1302}}
                  classes={{paper: classes.menu}}
                  elevation={0}
                  keepMounted
            >

                {menuOptions.map((option, i) => (
                    <MenuItem key={`${option}${i}`} onClick={(e) => {
                        handleMenuItemClick(e, i);
                        props.setValue(1)
                    }}
                              selected={i === props.selectedIndex}
                              component={Link} to={option.link}
                              classes={{root: classes.menuItem}}
                    >{option.name}
                    </MenuItem>
                ))}
                {/*^ terpilih ketika value nya 1 atau berada di tabs services ,
                            selected={i === selectedIndex && value === 1}*/}
            </Menu>
        </>
    )

    const drawer = (
        //ditampilkan ketika layar berukuran < medium
        <>
            <SwipeableDrawer anchor={"right"} disableBackdropTransition={!iOS}
                             disableDiscovery={iOS}
                             open={openDrawer}
                             onClose={() => setOpenDrawer(false)}
                             onOpen={() => setOpenDrawer(true)}
                             classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin}/>
                {/*^ digunakan untuk meletakan drawer di bawah header */}
                <List disablePadding>
                    {routes.map((route, index) => (
                        <ListItem
                            key={`${route}${index}`}
                            onClick={() => {
                                setOpenDrawer(false);
                                props.setValue(route.activeIndex)
                            }}
                            divider button component={Link}
                            to={route.link}
                            selected={props.value === route.activeIndex}
                            classes={{selected: classes.drawerItemSelected}}
                        >
                            <ListItemText disableTypography
                                          className={classes.drawerItem}>
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
                              onClick={() => {
                                  setOpenDrawer(false);
                                  props.setValue(5)
                              }} divider button
                              component={Link} to={"/estimate"}
                              selected={props.value === 5}
                    >
                        <ListItemText className={classes.drawerItem}
                                      disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)}
                        disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </>
    )
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position={"fixed"} className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button component={Link} disableRipple to={"/"} onClick={() => props.setValue(0)}
                                className={classes.logoContainer}>
                            <img src={logo} alt="company logo" className={classes.logo}/>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )
}
