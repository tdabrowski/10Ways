import React from 'react';

class Contact extends React.Component {
    render(){
        return <div className="contact">
            <h3>
                Contact with us if you have any questions
            </h3>
            <Form/>
        </div>
    }
}

class Form extends React.Component{
        constructor(props){
            super(props);
            this.state={
                name:'',
                email: '',
                textMessage: '',
                errorMessage: ''
            };
        }

        submitAction = (e) => {
            if(this.state.name.length < 6){
                e.preventDefault();
                this.setState({
                    errorMessage:'Your Name is to short'
                });
            }
            else if(this.state.email.indexOf("@") === -1){
                e.preventDefault();
                this.setState({
                    errorMessage:  'E-mail is not valid'
                });
            }
            else if(this.state.textMessage.length > 100){
                e.preventDefault();
                this.setState({
                    errorMessage: 'Message is to long'
                });
            }
            else{
                this.setState({
                    errorMessage: ''
                });
                console.log('I send data from form - validation Ok');
            }
        }

        handleEmail = (e) => {
            this.setState({
                email: e.target.value
            });
        }

        handleName = (e) => {
            this.setState({
                name: e.target.value
            });
        }

        handleMessage = (e) => {
            this.setState({
                textMessage: e.target.value
            });
        }

        render(){

            return (
                <form onSubmit={this.submitAction} className="form">
                    <hr></hr>
                    <label htmlFor="name"> Your name:</label>
                    <input id="name" name="name" onChange={this.handleName} type='text' value={this.state.name}/>

                    <label htmlFor="email">E-mail:</label>
                    <input id="email" name="email" onChange={this.handleEmail} type='email' value={this.state.email}/>

                    <label htmlFor="message"> Message:</label>
                    <textarea id="message" name="message" onChange={this.handleMessage} type='text' value={this.state.surname}/>
                    <br/>
                    <input type='submit' value='SEND'/>
                    <div style={{color:'red'}}>{this.state.errorMessage}</div>
                </form>
            );
        }
    }

export {Contact};
