import {Grid, Box, TextField, Container, Button } from '@mui/material'
import React from 'react'

function Register() {
    return (
        <Container fixed>
            <Grid container>
                <Grid item md={12}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                    <h1 className="text-center">Register</h1>
                    </Box>
                </Grid>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Grid item md={6}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '80ch' },
                            }}
                            noValidate
                            autoComplete="off"
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
                                label="Username"
                                helperText="Enter Your Username"
                                name="username"
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
                                variant="filled"
                                type="password"
                                id="outlined-required"
                                label="Password"
                                helperText="Enter Your Password"
                                name="password"
                                />
                                <TextField
                                required
                                variant="filled"
                                type="password"
                                id="outlined-required"
                                label="Password"
                                helperText="Confirm Your Password"
                                name="password_confirmation"
                                />
                                <Box display="flex" justifyContent="center" mt="20px" mb="60px">
                                    <Button type="submit" color="secondary" variant="contained" sx={{ width:200 }}>
                                        Submit Message
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