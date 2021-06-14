import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import footerAdornment from '../../assets/Footer Adornment.svg'
import {Grid, Hidden} from "@material-ui/core";
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const useStyle = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: 'relative'
    },
    adornment: {
        width: '25em',
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: 'Arial',
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: '3em'
    },
    icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em",
        }
    },
    socialContainer: {
        position: "absolute",
        marginTop: '-6em',
        right : "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em",

        }
    }
}))
export default function Footer(props) {
    const classes = useStyle()

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                {/*Untuk menyembunyikan header ketika layar berada di bawah ukuran md*/}
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(0)}
                                to="/"
                                className={classes.link}
                            >
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => {
                                    props.setValue(1);
                                    props.setSelectedIndex(0);
                                }}
                                to="/services"
                                className={classes.link}
                            >
                                Services
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                to="/customsoftware"
                                className={classes.link}
                                onClick={() => {
                                    props.setValue(1);
                                    props.setSelectedIndex(1);
                                }}
                            >
                                Custom Software Development
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                to="/mobileapps"
                                className={classes.link}
                                onClick={() => {
                                    props.setValue(1);
                                    props.setSelectedIndex(2);
                                }}
                            >
                                iOS/Android App Development
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => {
                                    props.setValue(1);
                                    props.setSelectedIndex(3);
                                }}
                                to="/websites"
                                className={classes.link}
                            >
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                component={Link}
                                to="/revolution"
                                className={classes.link}
                                onClick={() => props.setValue(2)}
                            >
                                The Revolution
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                to="/revolution"
                                className={classes.link}
                                onClick={() => props.setValue(2)}
                            >
                                Vision
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                to="/revolution"
                                className={classes.link}
                                onClick={() => props.setValue(2)}
                            >
                                Technology
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                to="/revolution"
                                className={classes.link}
                                onClick={() => props.setValue(2)}
                            >
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(3)}
                                to="/about"
                                className={classes.link}
                            >
                                About Us
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(3)}
                                to="/about"
                                className={classes.link}
                            >
                                History
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(3)}
                                to="/about"
                                className={classes.link}
                            >
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(4)}
                                to="/contact"
                                className={classes.link}
                            >
                                Contact Us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img src={footerAdornment} className={classes.adornment} alt="black decorative slash"/>

            <Grid container justify={"flex-end"} spacing={2} className={classes.socialContainer}>
                {/*Membuat icon menjadi di kanan, justify={"flex-end"}*/}
                <Grid item component={"a"} href={"http://www.facebook.com"} target={"_blank"}
                      rel={"noopener noreferrer"}>
                    <img src={facebook} alt="facebook logo" className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href={"http://www.twitter.com"} target={"_blank"}
                      rel={"noopener noreferrer"}>
                    <img src={twitter} alt="twitter logo" className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href={"http://www.instagram.com"} target={"_blank"}
                      rel={"noopener noreferrer"}>
                    <img src={instagram} alt="instagram logo" className={classes.icon}/>
                </Grid>
            </Grid>
        </footer>
    )


}
