import React from 'react';
import ReactDOM from 'react-dom';
import {Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';


document.addEventListener('DOMContentLoaded',function(){


    class BaseTemplate extends React.Component {
      render(){
        const activeStyle={
            backgroundColor: 'grey'
        }
        return (<header>
            <div>
                <span>10Ways</span>
                <nav>
                    <ul className="nav">
                        <li>
                            <IndexLink to="/" activeStyle={activeStyle}>Home.</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/news" activeStyle={activeStyle}>News.</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/work" activeStyle={activeStyle}>Work.</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/about" activeStyle={activeStyle}>About.</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/contact" activeStyle={activeStyle}>Contact.</IndexLink>
                        </li>
                    </ul>
                </nav>
            </div>
            {this.props.children}
        </header>
        );
      }
    }

    class News extends React.Component {
        render(){
            return <h1>We are hiring</h1>
        }
    }

    class Work extends React.Component {
        render(){
            return <h1>We work hard to achieve success</h1>
        }
    }

    class About extends React.Component {
        render(){
            return <p>
                Nullam augue lacus, tincidunt vitae vehicula vitae, viverra et nibh. Pellentesque vestibulum justo non mi vestibulum efficitur. Nullam iaculis magna ut quam tristique, eget congue justo congue. Pellentesque egestas risus sed nisl pulvinar ullamcorper. Nullam nec lorem sit amet lorem porta dapibus quis ac neque. Vestibulum egestas condimentum egestas. In in luctus justo, et venenatis ex. Sed in neque ut lectus dictum pulvinar id id nulla.
            </p>
        }
    }

    class Contact extends React.Component {
        render(){
            return <p>
                Phasellus nec purus lacus. Vivamus faucibus nisi nisi, a viverra urna lacinia et. Curabitur aliquam diam sit amet sapien euismod, eu ultrices turpis vulputate. Praesent in enim nec ante lobortis laoreet sit amet elementum augue.
                <address>10ways@your.way</address>
            </p>
        }
    }

    class None extends React.Component {
        render(){
            return <h1>Sorry resources that you are looking for here doesn't exist</h1>
        }
    }


    class Home extends React.Component {
        render(){
            return <div>
                <p>We create future</p>
                <h1>BEST SOLUTIONS<br />FOR YOUR COMPANY</h1>
                <button>Learn more</button>
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
                <section>
                    <div>
                        <div>
                            <div>
                                <h3>
                                    LEARN ABOUT<br/>
                                    OUR FANTASTIC <br/>
                                    HISTORY
                                </h3>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus vel augue quis fringilla. Etiam in porttitor mauris. Fusce odio arcu, bibendum posuere ante sed, laoreet condimentum diam. In nec eros id sapien iaculis dignissim. Vestibulum quis massa eu dolor condimentum pretium. Etiam venenatis dolor non lacinia consequat. Phasellus fringilla ligula at dui dapibus tincidunt. Morbi tortor dolor, dapibus in eleifend ac, sagittis eu massa. Aliquam quis suscipit libero.
                                </p>
                                <p>
                                    Donec condimentum, velit ac placerat porttitor, arcu libero sodales risus, sit amet elementum erat dolor nec turpis. Pellentesque tincidunt ante a nisi sollicitudin lobortis. Quisque accumsan imperdiet rhoncus. Integer et venenatis tellus. Maecenas sit amet diam lectus. Nunc nec fermentum lorem.
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
                <footer>
                    <div>
                        <div>
                            <p>10WAYS</p>
                        </div>
                        <div>
                            <div>
                                <ul>
                                    <li><a href="#">Production time</a></li>
                                    <li><a href="#">Questions and answers</a></li>
                                    <li><a href="#">Payment methods</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="#">Shipping information</a></li>
                                    <li><a href="#">Feedback</a></li>
                                    <li><a href="#">User agreement</a></li>
                                </ul>
                            </div>
                            <div></div>
                            <div>
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
