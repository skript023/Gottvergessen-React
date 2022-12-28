import {Grid, Box, TextField, Container, Button, Alert } from '@mui/material'
import { useNavigate  } from 'react-router-dom'
import React, {useState} from 'react'
import { useFormik } from 'formik';
import * as yup from "yup";
import axios from '../api/axios';

const contactSchema = yup.object().shape({
    fullname: yup.string().required("Fullname is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});
const initialValues = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
};

const Register = () => {
    const navigate = useNavigate();
    const [notif, setNotif] = useState(null);
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: contactSchema,
        onSubmit: (values) => {
            axios.post("/user/create", values, {
            headers: {'Content-Type': 'multipart/form-data'}
            }).then((response) => {
                if (response.status != 201)
                {
                    setNotif(()=> (<Alert severity="error">{ response.data.message }</Alert>))
                }
                else
                {
                    setTimeout(()=> setNotif(()=> (<Alert severity="success">{ response.data.message }</Alert>)), 2000)
                    navigate("/login", {replace: true})
                }
            }).catch(() => {
                setNotif(()=> (<Alert severity="error">Registration failed</Alert>))
            })
        },
    });

    return (
        <Container fixed>
            {notif}
            <Grid container>
                <Grid md={6}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <h1 className="text-center">Register</h1>
                    </Box>
                </Grid>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Grid md={6}>
                        <Box
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '75ch' },
                            }}
                            >
                            <form onSubmit={formik.handleSubmit}>
                                <TextField
                                required
                                variant="filled"
                                type="text"
                                id="outlined-required"
                                label="Fullname"
                                name="fullname"
                                helperText={formik.touched.fullname && formik.errors.fullname}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.fullname}
                                error={!!formik.touched.fullname && Boolean(formik.errors.fullname)}
                                />
                                <TextField
                                required
                                variant="filled"
                                type="text"
                                id="outlined-required"
                                label="Username"
                                name="username"
                                helperText={formik.touched.username && formik.errors.username}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                error={!!formik.touched.username && Boolean(formik.errors.username)}
                                />
                                <TextField
                                required
                                variant="filled"
                                type="text"
                                id="outlined-required"
                                label="Email"
                                name="email"
                                helperText={formik.touched.email && formik.errors.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                error={!!formik.touched.email && !!formik.errors.email}
                                />
                                <TextField
                                required
                                variant="filled"
                                type="password"
                                id="outlined-required"
                                label="Password"
                                name="password"
                                helperText={formik.touched.password && formik.errors.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                error={!!formik.touched.password && !!formik.errors.password}
                                />
                                <TextField
                                required
                                variant="filled"
                                type="password"
                                id="outlined-required"
                                label="Confirm Password"
                                name="password_confirmation"
                                helperText={formik.touched.password_confirmation && formik.errors.password_confirmation}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password_confirmation}
                                error={!!formik.touched.password_confirmation && !!formik.errors.password_confirmation}
                                />
                                <Box display="flex" justifyContent="center" mt="20px" mb="60px">
                                    <Button 
                                    type="submit" 
                                    color="secondary" 
                                    variant="contained" 
                                    sx={{ width:200 }}
                                    >
                                        Register
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </Container>
    )
}

export default Register;