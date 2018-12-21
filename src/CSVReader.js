import React, { Component } from 'react'

import PropTypes from 'prop-types'
import PapaParse from 'papaparse'

export default class CSVReader extends Component {
  static propTypes = {
    onFileLoaded: PropTypes.func.isRequired,
    inputRef: PropTypes.object.isRequired,
    parserOptions: PropTypes.object,
    style: PropTypes.object
  }

  handleChangeFile = (e) => {
    const {
      onFileLoaded,
      parserOptions = {}
    } = this.props

    const reader = new window.FileReader()
    const filename = e.target.files[0].name

    reader.onload = (event) => {
      const csvData = PapaParse.parse(
        event.target.result,
        Object.assign(parserOptions, {
          error: err => (console.log(err))
        })
      )
      onFileLoaded(csvData.data, filename)
    }

    reader.readAsText(e.target.files[0])
  }

  render() {
    const {
      inputRef,
      style
    } = this.props

    return (
      <input
        type='file'
        accept='text/csv'
        ref={inputRef}
        onChange={e => this.handleChangeFile(e)}
        style={style}
      />
    )
  }
}
