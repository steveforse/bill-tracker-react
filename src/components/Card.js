import React, { Component } from 'react';

import Button from './Button.js'

import {
  FaPlus
} from 'react-icons/fa'

export default class CustomCard extends Component {

  newButton() {
    if (!this.props.headerButton) { return '' }
    const { text, url } = this.props.headerButton
    return (
      <Button variant="success" url={url} icon={FaPlus}>{text}</Button>
    )
  }

  header() {
    if (!this.props.title) { return '' }
    return (
      <div className="d-flex card-header">
        <div className="h4 mr-auto">{ this.props.title }</div>
        { this.newButton() }
      </div>
    )
  }

  render() {
    return (
      <div className="card">
        { this.header() }
        <div className={[this.props.className, 'card-body'].join(' ')}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

