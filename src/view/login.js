import { Box, TextField, Button, Grid, Alert } from '@mui/material'
import { useNavigate  } from 'react-router-dom'
import React, {useState} from 'react'
import { Formik } from 'formik';
import * as yup from "yup";
import axios from '../api/axios'
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./component/header";
import useAuth from './hooks/authentication';

const checkoutSchema = yup.object().shape({
    identity: yup.string().required("Username or Email is required"),
    password: yup.string().required("Password is required"),
});
const initialValues = {
    identity: "",
    password: "",
};

const Login = () => {
    const { setAuth } = useAuth()
    const navigate = useNavigate();
    const [notif, setNotif] = useState(null);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        axios.post("/auth/login", values, {
            headers: {'Content-Type': 'application/json'}
        }).then((response) => {
            if (response.status === 200)
            {
                setTimeout(()=> setNotif(()=> (<Alert severity="success">{ response.data.message }</Alert>)), 2000)
                setAuth(response.data)
                sessionStorage.setItem('RESPONSE', response.data)
                navigate("/dashboard", {replace: true})
            }
            else
            {
                setNotif(()=> (<Alert severity="error">{ response.data.message }</Alert>))
            }
        })
    };

    return (
        <div>{notif}
        <Box mb="150px">
            <Grid md={6}>
                <Box display="flex" justifyContent="center" mt="50px">
                    <Header title="Login" subtitle="" />
                </Box>
            </Grid>
            <Grid md={6}>
                <Box display="flex" justifyContent="center" sx={{'& .MuiTextField-root': { width: '50ch' } }}>
                    <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
                        {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        }) => (
                        <form onSubmit={handleSubmit}>
                            <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                            >
                            <TextField
                                required
                                variant="filled"
                                type="text"
                                label="Username or Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.identity}
                                name="identity"
                                error={!!touched.identity && !!errors.identity}
                                helperText={touched.identity && errors.identity}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                required
                                variant="filled"
                                type="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 4" }}
                            />
                            </Box>
                            <Box display="flex" justifyContent="center" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Login
                            </Button>
                            </Box>
                        </form>
                        )}
                    </Formik>
                </Box>
            </Grid>
        </Box>
        </div>
    )
}

export default Login;