import React from "react";
import Lottie from 'react-lottie'
import {makeStyles, useTheme} from "@material-ui/core/styles";
import animationData from '../../animations/landinganimation/data'
import {Button, Grid, Typography} from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import customSofwareIcon from '../../assets/Custom Software Icon.svg'

const useStyle = makeStyles(theme => ({
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
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
    },
    learnButtonStyle: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5
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
    subtittle: {
        marginBottom: "1em"
    }
}))

export default function LandingPage() {
    const classes = useStyle();
    const theme = useTheme();

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
                                <Button variant={"outlined"} className={classes.learnButton}>
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
                <Grid container direction={"row"}>
                    <Grid>
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
                        <img src={customSofwareIcon} alt="Custom Software Icon"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
