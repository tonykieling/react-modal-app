import React from 'react';
import './App.css';
import ReactModal from 'react-modal'

const customStyles = {
  content : {
    width: "100%",
    height: "100%",
    left: "0",
    top: "0"
    // top                   : '50%',
    // left                  : '50%',
    // right                 : 'auto',
    // bottom                : 'auto',
    // marginRight           : '-50%',
    // transform             : 'translate(-50%, -50%)'
  }
};

class App extends React.Component {
  constructor() {
    super()
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

  customStyles = {
    content: {
      width: 200
    }
  }

  render() {
    return (
      <div className="App">
        <br /><br /><br /><br />
        react-modal-app
        <br /><br />
        <button onClick={this.handleOpenModal}>Open Modal</button>
        <ReactModal
          isOpen={this.state.showModal}
          // closeTimeoutMS={500}
          shouldCloseOnEsc={true}
          contentLabel="Minimal Modal Example"
          style={this.customStyles}
        >
          <h1>Modal title</h1>
          <p>modal p example</p>
          <p>modal p example</p>
          <p>modal p example</p>
          <p>modal p example</p>
          <p>modal p example</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default App;
