import './core/card_style.css'
import foto from './image/foto.jpg'
import {useEffect} from 'react'
import { Box, Container, Avatar, Grid, Stack  } from "@mui/material";

const About = (props) =>
{
    useEffect(() => {
        document.title = props.title || "React App";
    }, [props.title]);

    return (
        <div>
            <Grid item md={12}>
                <Box display="flex" justifyContent="center" mt="50px">
                    <Avatar 
                    src={foto} 
                    alt="Fatur Muhammad"
                    sx={{ width: 250, height: 250 }}/>
                </Box>
                <Box display="flex" justifyContent="center">
                    <h1 className="display-4">Fatur Muhammad</h1>
                </Box>
                <Box display="flex" justifyContent="center">
                    <p className="lead">Backend Developer</p>
                </Box>
            </Grid>

                <Grid item md={12}>
                    <Box display="flex" justifyContent="center">
                        <h2>About Me</h2>
                    </Box>
                </Grid>
                <Stack 
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                    <Container fixed>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Incidunt possimus necessitatibus harum repellendus perferendis illum, 
                            itaque nulla architecto, quasi odit est nihil vel omnis autem, animi labore sint molestiae dolorum in eius sunt quae nostrum. 
                            Rerum quibusdam explicabo placeat sed ut sint ab tempora veniam aliquam maxime, 
                            quas fugit ipsam nam ex soluta nemo quos consequatur! Deserunt repellat aliquid, 
                            asperiores quam voluptatem explicabo! Ullam et quis aperiam, nobis sapiente ad. 
                            Quos eos ipsa, et temporibus, quod id dolorum perspiciatis inventore nisi, 
                            quia quaerat expedita explicabo animi fugit iste consequatur quis corrupti porro officiis sint recusandae dolore quam. Maxime, itaque omnis?
                        </p>
                    </Container>
                    
                    <Container fixed>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Incidunt possimus necessitatibus harum repellendus perferendis illum, 
                            itaque nulla architecto, quasi odit est nihil vel omnis autem, animi labore sint molestiae dolorum in eius sunt quae nostrum. 
                            Rerum quibusdam explicabo placeat sed ut sint ab tempora veniam aliquam maxime, 
                            quas fugit ipsam nam ex soluta nemo quos consequatur! Deserunt repellat aliquid, 
                            asperiores quam voluptatem explicabo! Ullam et quis aperiam, nobis sapiente ad. 
                            Quos eos ipsa, et temporibus, quod id dolorum perspiciatis inventore nisi, 
                            quia quaerat expedita explicabo animi fugit iste consequatur quis corrupti porro officiis sint recusandae dolore quam. Maxime, itaque omnis?
                        </p>
                    </Container>
                </Stack>

            <section id="project">
                <div className="container mb-5 mt-5">
                    <div className="row text-center">
                        <div className="col-md-12 mb-5 mt-5">
                            <h2>My Projects</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-4 mb-5 mt-5">
                            <div className="card">
                                <img src="SS/caseinsensitive.jpg" alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 mt-5">
                            <div className="card">
                                <img src="SS/caseinsensitive.jpg" alt="" className="card-img-top"/>
                                <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 mt-5">
                            <div className="card">
                                <img src="SS/caseinsensitive.jpg" alt="" className="card-img-top"/>
                                <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 mt-5">
                            <div className="card">
                                <img src="SS/caseinsensitive.jpg" alt="" className="card-img-top"/>
                                <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 mt-5">
                            <div className="card">
                                <img src="SS/caseinsensitive.jpg" alt="" className="card-img-top"/>
                                <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 mt-5">
                            <div className="card">
                                <img src="SS/caseinsensitive.jpg" alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
