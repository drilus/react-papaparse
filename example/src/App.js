import React, { Component } from 'react';
import './App.css';

import { CSVReader } from 'react-papaparse';

class App extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  handleReadCSV = (data) => {
    console.log(data);
  }

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  }

  handleImportOffer = () => {
    this.fileInput.current.click();
  }

  render() {
    return (
      <div className="App">
        <CSVReader
          onFileLoaded={this.handleReadCSV}
          inputRef={this.fileInput}
          style={{display: 'none'}}
          onError={this.handleOnError}
        />
        <button onClick={this.handleImportOffer}>Import</button>
      </div>
    );
  }
}

export default App;