import React from 'react';
import './App.css';
import ReactModal from 'react-modal'

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

  render() {
    return (
      <div className="App">
        <br /><br /><br /><br />
        react-modal-app
        <br /><br />
        <button onClick={this.handleOpenModal}>Open Modal</button>
        <ReactModal
          isOpen={this.state.showModal}
        >
        <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default App;
