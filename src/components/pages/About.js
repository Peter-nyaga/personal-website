import React from 'react';
import { Link } from 'react-router-dom';


export const About = () => {
    return (
        <section className="section about">
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8 text-center">
                                <h4 className="main-heading">About me</h4>
                                <div className="underline mx-auto"></div>
                                <p className="abt">
                                    I am a fullstack web developer and a mobile developer. I create responsive websites that can 
                                    be viewed on all devices irrespective of their screen sizes.
                                    Before I begin developng any project, I always need to have a sketch of the layout at my hand 
                                    to follow not to mix things up along the way. I always do try to get details of requirements of the 
                                    project before going ahead with the development. This helps me achieve more since i works towards customer 
                                    satisfaction and also learn more about competition in the market.
                                    After the website is finished and ready to deploy and sell a product or service, it is essential customers 
                                    know about you. I will create an advertising campaign for you in Google Adwords and Facebook.
                                </p>
                                <p className="abt">
                                    To learn more about my skills<Link to="/skilss" className="btn btn-primary">click here</Link>
                                </p>
                            </div>
                            <div className="col-md-4 text-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About