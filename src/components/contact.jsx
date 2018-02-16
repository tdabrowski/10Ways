import React from 'react';

class Contact extends React.Component {
    render(){
        return <div className="contact">
            <h3>
                Contact with us if you have any questions
            </h3>
            <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <address>
                E-mail: <a href="mailto:10ways@your.way">10ways@your.way</a><br/>
                Phone: <span>+48 111 222 333</span><br/>
                Visit us at:<br/>
                <span>Mazovian district, Warsaw</span><br/>
                <span>Poland</span>
            </address>
        </div>
    }
}

export {Contact};
