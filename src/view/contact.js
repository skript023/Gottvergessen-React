
const Contact = () => 
{
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Contact Us</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form action="/#" method="post">
                        <div className="form-group">
                            <label>Fullname</label>
                            <input type="text" className="form-control" name="name" placeholder="Your Fullname" required/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" required/>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" cols="30" rows="10" name="message" required></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" name="add_contact">Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25447306.457171943!2d113.92132701805313!3d-0.7892749886570789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e1!3m2!1sid!2sid!4v1610800322845!5m2!1sid!2sid" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="Map">Map</iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;