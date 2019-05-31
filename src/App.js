import React from 'react';
import './App.css';
// import ReactModal from 'react-modal'
import {Button, Form} from 'react-bootstrap'

// const customStyles = {
//   content : {
//     // width: "100%",
//     // height: "100%",
//     // left: "0",
//     // top: "0"
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleSubmit = () => {
    console.log("handlesubmit")
  }

  customStyles = {
    content: {
      left: eval("50%" - 100),
      width: 200
    }
  }

  render() {
    return (
      <div className="moldura">
      <h1>Login Page</h1>    
      <div className="d-flex justify-content-end">
        <Button onClick={this.handleSubmit} variant="outline-success">
          Close me ya'll!
        </Button>
      </div>
          {/* <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>User / Email address</Form.Label>
                  <Form.Control
                      type="email"
                      placeholder="Type the user's email"
                      name="email"
                      onChange={this.handleChange}
                      value={this.state.email}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                  />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>

          </Form> */}

    </div>

    );
  }
}

export default App;
