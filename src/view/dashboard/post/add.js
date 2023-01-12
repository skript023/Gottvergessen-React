import {Grid, Box, TextField, Container, Button, Alert } from '@mui/material'
import { useNavigate  } from 'react-router-dom'
import React, {useState} from 'react'
import { useFormik } from 'formik';
import * as yup from "yup";
import useAuth from '../../hooks/authentication'
import axios from '../api/axios';

const contactSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    post: yup.string().required("Post is required"),
    category: yup.string().required("Category is required"),
    image: yup.string().required("Image is required")
});
const initialValues = {
    title: "",
    post: "",
    category: "",
    image: ""
};

const AddPost = () => {
    const {auth} = useAuth()
    const navigate = useNavigate();
    const [notif, setNotif] = useState(null);
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: contactSchema,
        onSubmit: (values) => {
            axios.post("/post/create", values, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${auth.token}`
            }}).then((response) => {
                if (response.status !== 201)
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
                                label="Title"
                                name="title"
                                helperText={formik.touched.title && formik.errors.title}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.title}
                                error={!!formik.touched.title && Boolean(formik.errors.title)}
                                />
                                <TextField
                                required
                                variant="filled"
                                type="text"
                                id="outlined-required"
                                label="Categories"
                                name="category"
                                helperText={formik.touched.category && formik.errors.category}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.category}
                                error={!!formik.touched.category && !!formik.errors.category}
                                />
                                <TextField
                                required
                                variant="filled"
                                type="password"
                                id="outlined-required"
                                label="Post Picture"
                                name="image"
                                helperText={formik.touched.image && formik.errors.image}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.image}
                                error={!!formik.touched.image && !!formik.errors.image}
                                />
                                <TextField
                                multiline
                                variant="filled"
                                type="text"
                                id="outlined-required"
                                label="Post"
                                name="post"
                                helperText={formik.touched.post && formik.errors.post}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.post}
                                error={!!formik.touched.post && Boolean(formik.errors.post)}
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

export default AddPost;