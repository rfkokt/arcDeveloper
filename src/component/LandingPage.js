import React from "react";
import Lottie from 'react-lottie'
import {makeStyles, useTheme} from "@material-ui/core/styles";
import animationData from '../animations/keyboard/63886-developer-working.json'
import {Button, Card, CardContent, Grid, Typography, useMediaQuery} from "@material-ui/core";
import ButtonArrow from "./ui/ButtonArrow";
import customSofwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg'
import CallToAction from "./ui/CallToAction";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        mixWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "35em",
            textAlign: "center",
            marginRight: "2em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em",
        }
    },
    heroContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        }
    },
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        //    ^ Fungsi revolution card adalah untuk menempatkan card berada di tengah2 background
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%"
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"

    }
}))

export default function LandingPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const defaultOption = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveaspectratio: 'xMidYmid slice'
        }
    };


    return (
        <Grid container direction={"column"} className={classes.mainContainer}>
            <Grid item>
                {/*----- Hero Block -----*/}
                <Grid container justify={"flex-end"} alignItems={"center"} direction={'row'}>
                    <Grid sm item className={classes.heroContainer}>
                        <Typography variant={"h2"} align={"center"}>
                            Bringing west coast technology <br/> to the Midwest
                        </Typography>
                        <Grid container justify={"center"} className={classes.buttonContainer}>
                            <Grid item>
                                <Button onClick={() => props.setValue(5)} component={Link} to={"/estimate"}
                                        className={classes.estimateButton} variant={'contained'}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={() => props.setValue(2)} component={Link} to={"/revolution"}
                                        variant={"outlined"} className={classes.learnButtonHero}>
                                    <span style={{marginRight: 10}}>
                                        Learn More
                                    </span> <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.animation} sm item>
                        <Lottie options={defaultOption} height={'100%'} width={"100%"}/>
                    </Grid>
                </Grid>
                {" "}
                {/*----- Serivces Block -----*/}
                <Grid justify={matchesSM ? "center" : undefined} container direction={"row"}
                      className={classes.serviceContainer}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant={'h4'}>
                            Custom Software Development
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Complete digital solution, from investigation to {" "}
                            <span className={classes.specialText}>Celebration.</span>
                        </Typography>
                        <Button onClick={() => {
                            props.setValue(1);
                            props.setSelectedIndex(1)
                        }} component={Link} to={"/customsoftware"} variant={"outlined"} className={classes.learnButton}>
                            <span style={{marginRight: 10}}>
                                        Learn More
                            </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={customSofwareIcon} alt="Custom Software Icon"/>
                    </Grid>
                </Grid>
                {" "}
                {/*iOS/Android App Development Block */}
                <Grid
                    justify={matchesSM ? "center" : "flex-end"}
                    container direction={"row"}
                    className={classes.serviceContainer}
                >
                    <Grid
                        item
                        style={{
                            marginLeft: matchesSM ? 0 : "5em",
                            textAlign: matchesSM ? "center" : undefined
                        }}
                    >
                        <Typography variant={'h4'}>
                            iOS/Android App Development
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Integrate your web experience or create a standalone app
                            {matchesSM ? null : <br/>}with either mobile platform.
                        </Typography>
                        <Button onClick={() => {
                            props.setValue(1);
                            props.setSelectedIndex(2)
                        }} component={Link} to={"/mobileapps"} variant={"outlined"} className={classes.learnButton}>
                            <span style={{marginRight: 10}}>
                                        Learn More
                            </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{
                        marginRight: matchesSM ? 0 : "5em",
                    }}>
                        <img className={classes.icon} src={mobileAppIcon} alt="Mobile Phone Icon"/>
                    </Grid>
                </Grid>
                {" "}
                {/*----- Website Block -----*/}
                <Grid justify={matchesSM ? "center" : undefined} container direction={"row"}
                      className={classes.serviceContainer}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography variant={'h4'}>
                            Website Development
                        </Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button onClick={() => {
                            props.setValue(1);
                            props.setSelectedIndex(3)
                        }} component={Link} to={"/websites"} variant={"outlined"} className={classes.learnButton}>
                            <span style={{marginRight: 10}}>
                                        Learn More
                            </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={websiteIcon} alt="Websites Icon"/>
                    </Grid>
                </Grid>
                {/*Revolution Block*/}
                <Grid item>
                    <Grid container style={{height: "100em", marginTop: "12em"}} alignItems={"center"}
                          justify={"center"}>
                        <Card className={classes.revolutionCard}>
                            <CardContent>
                                <Grid conatiner direction={"column"} style={{textAlign: "center"}}>
                                    <Grid item>
                                        <Typography variant={"h3"} gutterBottom>
                                            The Revolution
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"subtitle1"}>
                                            Visionary insights coupled with cutting-edge technology is a recipe for
                                            revolution.
                                        </Typography>
                                        <Button onClick={() =>
                                            props.setValue(2)
                                        } component={Link} to={"/revolution"} variant={"outlined"}
                                                className={classes.learnButtonHero}>
                                    <span style={{marginRight: 10}}>
                                        Learn More
                                    </span> <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <div className={classes.revolutionBackground}/>
                    </Grid>
                    {/*Information Block*/}
                    <Grid item>
                        <Grid container style={{height: "80em"}} direction={"row"} alignItems={"center"}
                              className={classes.infoBackground}>
                            <Grid item container
                                  style={{textAlign: matchesXS ? "center" : "inherit"}}
                                  direction={matchesXS ? "column" : "row"}
                            >
                                <Grid item sm style={{
                                    marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em"
                                }}>
                                    <Grid container style={{marginBottom: matchesXS ? "10em" : 0}} direction={"column"}>
                                        {/*Membenarkan tampilah ketika di mobile yg menyisakan space*/}
                                        <Typography variant={"h2"} style={{color: "white"}}>
                                            About Us
                                        </Typography>
                                        <Typography variant={"subtitle2"}>
                                            Let's Get Personal
                                        </Typography>
                                        <Grid item>
                                            <Button onClick={() =>
                                                props.setValue(3)
                                            } component={Link} to={"/about"} variant={"outlined"}
                                                    style={{color: "white", borderColor: "white"}}
                                                    className={classes.learnButton}>
                                         <span style={{marginRight: 10}}>
                                                    Learn More
                                        </span>
                                                <ButtonArrow width={10} height={10} fill={theme.palette.common.white}/>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sm style={{
                                    marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                                    textAlign: matchesXS ? "center" : "right"
                                }}>
                                    <Grid container direction={"column"}>
                                        <Typography variant={"h2"} style={{color: "white"}}>
                                            Contact Us
                                        </Typography>
                                        <Typography variant={"subtitle2"}>
                                            Say Hello!{" "}<span role={'img'} aria-label={'waving hand'}>👏</span>
                                        </Typography>
                                        <Grid item>
                                            <Button onClick={() =>
                                                props.setValue(4)
                                            } component={Link} to={"/contact"} variant={"outlined"}
                                                    style={{color: "white", borderColor: "white"}}
                                                    className={classes.learnButton}>
                                         <span style={{marginRight: 10}}>
                                                    Learn More
                                        </span>
                                                <ButtonArrow width={10} height={10} fill={theme.palette.common.white}/>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                    {/*CTA Block */}
                    <CallToAction setValue={props.setValue}/>
                </Grid>
            </Grid>
        </Grid>
    )
}
