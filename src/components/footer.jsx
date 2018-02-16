import React from 'react';
    class Footer extends React.Component {
        render(){
            return (
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <span></span>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <ul>
                                    <li><a href="#">Production time</a></li>
                                    <li><a href="#">Questions and answers</a></li>
                                    <li><a href="#">Payment methods</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <ul>
                                    <li><a href="#">Shipping information</a></li>
                                    <li><a href="#">Feedback</a></li>
                                    <li><a href="#">User agreement</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4">
                                <a href="mailto:10ways@your.way">10ways@your.way</a>
                            </div>
                        </div>
                    </div>
                </footer>
            );
        }
    }
export {Footer};
