import { Typography, Link } from "@mui/material";

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://gottvergessen.000webhostapp.com/">
                Fatur Muhammad
                <p hidden>learn react</p>
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const Footer = (props) => {
    return (
        <Copyright sx={{ pt: 5, pb:4 }} />
    );
}

export default Footer;
