import './core/card_style.css'
import foto from './image/foto.jpg'
import {useEffect} from 'react'

const About = (props) =>
{
    useEffect(() => {
        document.title = props.title || "React App";
    }, [props.title]);

    return (
        <div>
            <section className="jumbotron text-center mt-5 my-5">
                <img src={foto} className="img-fluid mx-auto rounded-circle profile-style" alt="Fatur Muhammad"/>
                <h1 className="display-4">Fatur Muhammad</h1>
                <p className="lead">Beginner Web Designer</p>
            </section>

            <section id="about">
                <div className="container mb-5 mt-5">
                    <div className="row text-center">
                        <div className="col-md-12 mb-5 mt-5">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col mb-12">
                            <p>
                            Chime is a financial technology company founded on the premise that basic banking services should be helpful, easy and free. 
                            We want to profit with our members, not from them. 
                            Thats why our model doesnt rely on overdraft fees, monthly service fees, service fees, minimum balance requirements, and more.
                            We partner with regional banks to design member first financial products. 
                            This creates a more competitive market with better, lower-cost options for
                            </p>
                        </div>
                        
                        <div className="col mb-12">
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
                        </div>
                    </div>
                </div>
            </section>

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
