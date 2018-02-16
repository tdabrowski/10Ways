import React from 'react';

class Work extends React.Component {
    render(){
        const description = [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
        ];
        let solutions = description.map((el,i)=>{
            return <li key={i}>
                <p>{el}</p>
            </li>
        });
        return <div className="work">
            <h3>We work for your expectations with best care for your business</h3>
            <ul>
                {solutions}
            </ul>
        </div>
    }
}

export {Work};
