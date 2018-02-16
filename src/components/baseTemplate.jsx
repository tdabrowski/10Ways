import React from 'react';
import {
    Link,
    IndexLink
} from 'react-router';

//Menu items
const menu = [{text:'Home.',link:'/'},{text:'News.',link:'/news'},{text:'Work.',link:'/work'},{text:'About.',link:'/about'},{text:'Contact.',link:'/contact'}];

//Template for main router with navigation
class BaseTemplate extends React.Component {
  render(){
    const activeStyle={
        backgroundColor: 'grey'
    }
    let navigation = menu.map((el,i)=>{
        return  <li key={i}>
                    <IndexLink className="linkStyle" to={el.link} activeStyle={activeStyle}>{el.text}</IndexLink>
                </li>
    });
    return (<section className="mainSection">
        <div className="container">
            <header>
                <span></span>
                <nav>
                    <ul className="nav">
                        {navigation}
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
