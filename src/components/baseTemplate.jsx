import React from 'react';
import {Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';


class BaseTemplate extends React.Component {
  render(){
    const activeStyle={
        backgroundColor: 'grey'
    }
    return (<section className="mainSection">
        <div className="container">
            <header>
                <span></span>
                <nav>
                    <ul className="nav">
                        <li>
                            <IndexLink className="linkStyle" to="/" activeStyle={activeStyle}>Home.</IndexLink>
                        </li>
                        <li>
                            <IndexLink className="linkStyle" to="/news" activeStyle={activeStyle}>News.</IndexLink>
                        </li>
                        <li>
                            <IndexLink className="linkStyle" to="/work" activeStyle={activeStyle}>Work.</IndexLink>
                        </li>
                        <li>
                            <IndexLink className="linkStyle" to="/about" activeStyle={activeStyle}>About.</IndexLink>
                        </li>
                        <li>
                            <IndexLink className="linkStyle" to="/contact" activeStyle={activeStyle}>Contact.</IndexLink>
                        </li>
                    </ul>
                </nav>
            </header>
            {this.props.children}
        </div>

    </section>
    );
  }
}

export {BaseTemplate};
