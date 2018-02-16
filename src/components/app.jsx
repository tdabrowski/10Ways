import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './main_router.jsx';
import {Section} from './section.jsx';
import {Footer} from './footer.jsx';

document.addEventListener('DOMContentLoaded',function(){

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
