import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../component/header";
import axios from 'axios'

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        axios({
            method: "POST",
            url: "http://localhost:8000/api/v1/user/create",
            data: values,
            headers: {'Content-Type': 'multipart/form-data'}
            }).then((response) => {
                if (response.status === 201)
                {
                    alert(response.data["message"])
                }
                else
                {
                    alert("Registration failed")
                }
        })
    };

    return (
    <Box m="20px">
        <Header title="CREATE USER" subtitle="Create a New User Profile" />

        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
        >
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
                    label="Fullname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.fullname}
                    name="fullname"
                    error={!!touched.fullname && !!errors.fullname}
                    helperText={touched.fullname && errors.fullname}
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    required
                    variant="filled"
                    type="text"
                    label="Username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    name="username"
                    error={!!touched.username && !!errors.username}
                    helperText={touched.username && errors.username}
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    required
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
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
                <TextField
                    required
                    variant="filled"
                    type="password"
                    label="Confirm Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password_confirmation}
                    name="password_confirmation"
                    error={!!touched.password_confirmation && !!errors.password_confirmation}
                    helperText={touched.password_confirmation && errors.password_confirmation}
                    sx={{ gridColumn: "span 4" }}
                />
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                    Create New User
                </Button>
                </Box>
            </form>
            )}
        </Formik>
    </Box>
    );
};

//const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
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

export default Form;