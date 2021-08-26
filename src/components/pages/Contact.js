import React from 'react'

export const Contact = () => {
    return (
        <div>
            <section className="section contact" data-section="contact">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                    <h4 className="get">Get in touch</h4>
                                    <hr></hr>
                                    <div className="col-md-6">
                                    <h4 className="main-heading">Contact Information</h4>
                                    <div className="underline"></div>
                                    <p>
                                        P.O. BOX 60 - 10106 OTHAYA
                                    </p>
                                    <p>
                                        Phone Number: 0746586373
                                    </p>
                                    <p>
                                        Email: peternjnyaga@gmail.com
                                    </p>
                                </div>
                                <div className="col-md-6 border-start">
                                    
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter fullname" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone number</label>
                                        <input type="text" className="form-control" placeholder="Enter phone number" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="email" className="form-control" placeholder="Enter email address" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" placeholder="Type your message ..." required></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button className="btn btn-primary shadow w-100" type="submit">Send Message</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact