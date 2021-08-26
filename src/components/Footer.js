import React from 'react'

export const Footer = () => {
    return (
        <div>
            <section className="section footer bg-dark text-white">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Company Information</h4>
                            <hr></hr>
                            <p>
                                Am a web developer, mobile app developed and a desktop app developer.
                                I use different skills to achieve my goals.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h4>Quick links</h4>
                            <hr></hr>
                            <div><a href="www.facebook.com" className="facebook">Facebook</a></div>
                            <div><a href="www.twitter.com" className="facebook">Twitter</a></div>
                            <div><a href="www.github.com" className="facebook">Github</a></div>
                            <div><a href="www.linkedin.com" className="facebook">Linkedin</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer