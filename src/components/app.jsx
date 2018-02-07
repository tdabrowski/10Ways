import React from 'react';
import ReactDOM from 'react-dom';
import {Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import {BaseTemplate} from './baseTemplate.jsx';
import {Home} from './home.jsx';



document.addEventListener('DOMContentLoaded',function(){

    class News extends React.Component {
        render(){
            return <div>
                <h1>We are hiring</h1>
            </div>
        }
    }

    class Work extends React.Component {
        render(){
            return <div>
                <h1>We work hard to achieve success</h1>
            </div>
        }
    }

    class About extends React.Component {
        render(){
            return <div>
                <p>
                    Nullam augue lacus, tincidunt vitae vehicula vitae, viverra et nibh. Pellentesque vestibulum justo non mi vestibulum efficitur. Nullam iaculis magna ut quam tristique, eget congue justo congue. Pellentesque egestas risus sed nisl pulvinar ullamcorper. Nullam nec lorem sit amet lorem porta dapibus quis ac neque. Vestibulum egestas condimentum egestas. In in luctus justo, et venenatis ex. Sed in neque ut lectus dictum pulvinar id id nulla.
                </p>
            </div>
        }
    }

    class Contact extends React.Component {
        render(){
            return <div>
                <p>
                    Phasellus nec purus lacus. Vivamus faucibus nisi nisi, a viverra urna lacinia et. Curabitur aliquam diam sit amet sapien euismod, eu ultrices turpis vulputate. Praesent in enim nec ante lobortis laoreet sit amet elementum augue.
                    10ways@your.way
                </p>
            </div>
        }
    }

    class None extends React.Component {
        render(){
            return <div className="container">
                <h1>Sorry resources that you are looking for here doesn't exist</h1>
            </div>
        }
    }


    class Main extends React.Component {
        render(){
            return <Router history={hashHistory}>
                <Route path='/' component={BaseTemplate}>
                    <IndexRoute component={Home}/>
                    <Route path='/news' component={News}/>
                    <Route path='/work' component={Work}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='*' component={None}/>
                </Route>
            </Router>
        }
    }

    class Section extends React.Component {
        render(){
            return (
                <section className="secondSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>
                                    LEARN ABOUT<br/>
                                    OUR FANTASTIC <br/>
                                    HISTORY
                                </h3>
                            </div>
                            <div className="col-lg-6">
                                <p className="topPar">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus vel augue quis fringilla. Etiam in porttitor mauris. Fusce odio arcu, bibendum posuere ante sed, laoreet condimentum diam. In nec eros id sapien iaculis dignissim.
                                </p>
                                <p className="bottomPar">
                                    Donec condimentum, velit ac placerat porttitor, arcu libero sodales risus, sit amet elementum erat dolor nec turpis. Pellentesque tincidunt ante a nisi sollicitudin lobortis. Quisque accumsan imperdiet rhoncus. Integer et venenatis tellus.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }

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
                                <address>10ways@your.way</address>
                            </div>
                        </div>
                    </div>
                </footer>
            );
        }
    }

    class App extends React.Component {
        render(){
            return (
                <div>
                    <Main/>
                    <Section/>
                    <Footer/>
                </div>
            );
        }
    }

    ReactDOM.render(
      <App/>,
      document.getElementById('app')
    );

  });
