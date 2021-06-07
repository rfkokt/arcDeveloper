import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, useScrollTrigger, Tabs, Tab, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
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
        marginBottom: '3em'
        //^ menampilkan isi yg terhalang oleh Appbar
    },
    logo: {
        height: "8em"
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
}))

export default function Header(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0)

    const handleChange = (e, value) => {
        setValue(value)
    }

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
    }, [value])
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position={"fixed"}>
                    <Toolbar disableGutters>
                        <Button component={Link} disableRipple to={"/"} onClick={() => setValue(0)}
                                className={classes.logoContainer}>
                            <img src={logo} alt="company logo" className={classes.logo}/>
                        </Button>
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
                            <Tab className={classes.tab}
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
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )
}
