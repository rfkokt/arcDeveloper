import React, {useState, useEffect} from 'react'
import {
    AppBar, Toolbar, useScrollTrigger, Tabs, Tab, Button, Menu, MenuItem, useMediaQuery,
    SwipeableDrawer, Icon, IconButton
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
    }
}))

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const [openDrawer, setOpenDrawer] = useState(false)
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue)
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
        setSelectedIndex(i)
    }

    const menuOptions = [
        {
            name: "Services",
            link: "/services"
        }, {
            name: "Custom Software Development",
            link: "/customsoftware"
        }, {
            name: "Mobile App Development",
            link: "/mobileapps"
        }, {
            name: "Website Development",
            link: "/websites"
        },
    ]

    useEffect(() => {
        //Digunakan untuk menjaga value dan url tetap sama ketika page di refresh.
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4)
        }

        switch (window.location.pathname) {
            //^ untuk mengatur ketika sedang berada di suatu url, active tab akan mengikutin url yg tersedia
            case "/":
                if (value !== 0) {
                    setValue(0)
                }
                break;
            case "/services":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(0)
                }
                break;
            case "/customsoftware":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(1)
                }
                break;
            case "/mobileapps":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(2)
                }
                break;
            case "/websites":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(3)
                }
                break;
            case "/revolution" :
                if (value !== 2) {
                    setValue(2)
                }
                break;
            case "/about" :
                if (value !== 3) {
                    setValue(3)
                }
                break;
            case "/contact" :
                if (value !== 4) {
                    setValue(4)
                }
                break;
            case "/estimate" :
                if (value !== 5) {
                    setValue(5)
                }
                break;
            default:
                break;
        }
    }, [value])

    const tabs = (
        //ditampilkan ketika layar berukuran >= medium const matches = useMediaQuery(theme.breakpoints.down("md"))
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                className={classes.tabContainer}
                indicatorColor={'primary'}
            >
                {/* indicatorColor => untuk menghilangkan garis bawah di tab dengan mengganti warna sama menjadi warna primary*/}
                <Tab className={classes.tab}
                     component={Link}
                     to={"/"}
                     label={"Home"}/>
                <Tab
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup={anchorEl ? "true" : undefined}
                    onMouseOver={(e) => handleClick(e)}
                    className={classes.tab}
                    to={"/services"}
                    component={Link} label={"Services"}/>
                <Tab className={classes.tab}
                     to={"/revolution"}
                     component={Link} label={"The Revolution"}/>
                <Tab className={classes.tab}
                     to={"/about"}
                     component={Link} label={"About Us"}/>
                <Tab className={classes.tab}
                     to={"/contact"}
                     component={Link} label={"Contact Us"}/>
            </Tabs>
            <Button variant={"contained"} color={'secondary'} className={classes.button}>
                Free Estimate
            </Button>
            <Menu id={"simple-menu"} anchorEl={anchorEl} open={openMenu}
                  onClose={handleClose}
                  MenuListProps={{onMouseLeave: handleClose}}
                  onClick={() => {
                      handleClose();
                      setValue(1)
                  }}
                  classes={{paper: classes.menu}}
                  elevation={0}
            >

                {menuOptions.map((option, i) => (
                    <MenuItem key={option} onClick={(e) => {
                        handleMenuItemClick(e, i);
                        setValue(1)
                    }}
                              selected={i === selectedIndex && value === 1}
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
            <SwipeableDrawer anchor={"right"} disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer}
                             onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
                Example Drawer
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
                <AppBar position={"fixed"}>
                    <Toolbar disableGutters>
                        <Button component={Link} disableRipple to={"/"} onClick={() => setValue(0)}
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
