import React from 'react';
//import logo from './logo.svg';
import Mekarosi from './components/mekarosi'
import Clock from './components/clock'
import Form from './components/form'
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



// function
/*function App() {
  return (

   <div className='App-header'>

    <Mekarosi></Mekarosi>

    
    <Form id="container">
    <Form.Group controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Username" />
  </Form.Group>    
      
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Address</Form.Label>
    <Form.Control type="address" placeholder="Address" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicConfirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check when completed" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


   </div>
  );
} */


// class component
/* class App extends React.Component{
  render(){
    return(
     <div>
           <Mekarosi></Mekarosi>
     </div>
    )
  }
} */

constructors
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      date:new Date(),
      name:'Mekarosi',
      country: 'Nigeria'
    }
  }
  render(){
    return(
      
      <div class='App-header'><Clock></Clock></div>
    
      //<h1>I am queen and the time is {this.state.date.toDateString()}</h1>
    )
  }
}

export default App;
