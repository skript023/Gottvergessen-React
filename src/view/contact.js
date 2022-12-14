import {useEffect} from 'react'
import {Grid, Box, TextField, Container, Button } from '@mui/material'

const Contact = (props) => 
{
    useEffect(() => {
        document.title = props.title || "React App";
    }, [props.title]);

    // const handleFormSubmit = (values) => {
    //     console.log(values);
    // };

    return (
        <Container fixed>
            <Grid container>
                <Grid item md={12}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                    <h1 className="text-center">Contact Us</h1>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={6}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '60ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        justifyContent="space-between" alignItems="center"
                        >
                        <form>
                            <TextField
                            required
                            variant="filled"
                            type="text"
                            id="outlined-required"
                            label="Fullname"
                            helperText="Enter Your Fullname"
                            name="fullname"
                            />
                            <TextField
                            required
                            variant="filled"
                            type="text"
                            id="outlined-required"
                            label="Email"
                            helperText="Enter Your Email"
                            name="email"
                            />
                            <TextField
                            required
                            multiline
                            rows={5}
                            id="outlined-multiline-static"
                            label="Message"
                            name="message"
                            helperText="Enter Your Message"
                            />
                            <Box display="flex" justifyContent="center" mt="20px" mr="50px" mb="60px">
                                <Button type="submit" color="secondary" variant="contained" sx={{ width:200 }}>
                                    Submit Message
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box display="grid" gap="50px" justifyContent="space-between" alignItems="flex-end">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25447306.457171943!2d113.92132701805313!3d-0.7892749886570789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e1!3m2!1sid!2sid!4v1610800322845!5m2!1sid!2sid" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="Map"></iframe>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Contact;