import React from 'react';
import {Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';
import {BaseTemplate} from './baseTemplate.jsx';
import {Home} from './home.jsx';
import {News} from './news.jsx';
import {Work} from './work.jsx';
import {About} from './about.jsx';
import {Contact} from './contact.jsx';

class None extends React.Component {
    render(){
        return <div className="container">
            <h1>Sorry resources that you are looking for doesn't exist</h1>
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
export {Main};
