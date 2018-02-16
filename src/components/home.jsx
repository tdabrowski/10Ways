import React from 'react';
import {
    Link
} from 'react-router';

class Home extends React.Component {
    render(){
        return <div className="home">
            <p>We create future</p>
            <h1>BEST SOLUTIONS<br />FOR YOUR COMPANY</h1>
            <Link className="buttonLink" to='/work'>Learn more</Link>
        </div>
    }
}

export {Home};
