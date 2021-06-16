import React from "react";
import Lottie from 'react-lottie'
import {makeStyles, useTheme} from "@material-ui/core/styles";
import animationData from '../../animations/landinganimation/data'
import {Button, Grid, Typography, useMediaQuery} from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import customSofwareIcon from '../../assets/Custom Software Icon.svg'

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        mixWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em",
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
        fontSize: "0.9rem",
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
    }
}))

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
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
                                <Button className={classes.estimateButton} variant={'contained'}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant={"outlined"} className={classes.learnButtonHero}>
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
                        <Button variant={"outlined"} className={classes.learnButton}>
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
            </Grid>
        </Grid>
    )
}
