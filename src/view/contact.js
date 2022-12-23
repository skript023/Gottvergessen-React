import {useEffect, useState} from 'react'
import {Grid, Box, TextField, Container, Button } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from "yup";

const contactSchema = yup.object().shape({
    fullname: yup.string("Enter your fullname"),
    email: yup.string("Enter your email").email("Enter a valid email"),
    message: yup.string("Enter your message"),
});
const initialValues = {
    fullname: "",
    email: "",
    message: "",
};

const Contact = (props) => 
{
    useEffect(() => {
        document.title = props.title || "React App";
    }, [props.title]);

    const [notification, setNotif] = useState("");

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: contactSchema,
        onSubmit: (values) => {
            let res = axios({
            method: "POST",
            url: "http://localhost:8000/api/v1/contact/create",
            data: values,
            headers: {'Content-Type': 'multipart/form-data'}
            });
            let response = res.json();
            if (res.status === 200)
            {
                setNotif("User created successfully");
                alert(response.message)
            } 
            else
            {
                setNotif("Some error occured");
            }
        },
    });

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
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                            variant="filled"
                            type="text"
                            id="fullname"
                            label="Fullname"
                            name="fullname"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.fullname}
                            error={!!formik.touched.fullname && Boolean(formik.errors.fullname)}
                            helperText={formik.touched.fullname && formik.errors.fullname}
                            />
                            <TextField
                            variant="filled"
                            type="text"
                            id="email"
                            label="Email"
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={!!formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                            multiline
                            rows={5}
                            id="message"
                            label="Message"
                            name="message"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            error={!!formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                            />
                            <Box display="flex" justifyContent="center" mt="20px" mr="50px" mb="60px">
                                <Button type="submit" 
                                color="secondary" 
                                variant="contained" 
                                sx={{ width:200 }}
                                loading={formik.isSubmitting}
                                onClick={formik.submitForm}
                                >
                                    Send Message
                                </Button>
                                <div className="message">{notification ? <p>{notification}</p> : null}</div>
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