import {createMuiTheme} from '@material-ui/core/styles';

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
export default createMuiTheme({
    palette: {
        type: "dark",
        common : {
            blue : `${arcBlue}`,
            orange : `${arcOrange}`
        },
        primary :{
            main : `${arcBlue}`
        },
        secondary :{
            main :`${arcOrange}`
        }
    },
    typography :{
        tab : {
            fontFamily : "Raleway",
            textTransform : "none",
            fontWeight : 700,
            fontSize : '1rem',
        },
    //    ^ bisa membuat class sendiri untuk digunakan universal, dengan mengakses makeStyles(theme => ({
        estimate : {
            fontFamily : "Pacifico",
            fontSize : '1rem',
            textTransform : "none",
            color : 'white'
        }
    }
})
