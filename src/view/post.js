import React from 'react'
import { 
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    Stack,
    TextField,
    Button
} from "@mui/material";

function Post() {
    return (
        <Grid container>
            <Stack direction="row" ustifyContent="center" alignItems="center" spacing={3} display="-ms-flexbox">
                <Container fixed>
                    <Grid md={12} sx={{ pt:5 }}>
                        <Card>
                        <img src='https://kbu-cdn.com/dk/wp-content/uploads/beef-burger-special.jpg' alt='burgir'></img>
                        </Card>
                    </Grid>
                    <Grid md={12} sx={{ pt:5 }}>
                        <Card>
                            <CardContent>
                                <Box display="flex" justifyContent="center">
                                    <Typography variant="h2" component="div" color="text.secondary" gutterBottom>
                                        Title
                                    </Typography>
                                </Box>
                                <Typography variant="p" component="div" sx={{ fontSize:16 }}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Incidunt possimus necessitatibus harum repellendus perferendis illum, 
                                    itaque nulla architecto, quasi odit est nihil vel omnis autem, animi labore sint molestiae dolorum in eius sunt quae nostrum. 
                                    Rerum quibusdam explicabo placeat sed ut sint ab tempora veniam aliquam maxime, 
                                    quas fugit ipsam nam ex soluta nemo quos consequatur! Deserunt repellat aliquid, 
                                    asperiores quam voluptatem explicabo! Ullam et quis aperiam, nobis sapiente ad. 
                                    Quos eos ipsa, et temporibus, quod id dolorum perspiciatis inventore nisi, 
                                    quia quaerat expedita explicabo animi fugit iste consequatur quis corrupti porro officiis sint recusandae dolore quam. Maxime, itaque omnis?
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Container>
                <Container fixed>
                    <Grid md={12}>
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
                                <Box display="flex" justifyContent="center">
                                    <Button type="submit" color="secondary" variant="contained" sx={{ width:200 }}>
                                        Submit Message
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Grid>
                </Container>
            </Stack>
        </Grid>
    )
}

export default Post