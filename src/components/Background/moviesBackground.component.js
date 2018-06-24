import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from '../../App.js';

export default class LukeBackground extends Component {

  static propTypes = {
    children: PropTypes.node,
    styles: PropTypes.object,
  };

  render(){
    const {children, styles} = this.props;
    return(
      <div className='container'>
        <div className='row'>
          {
            children
          }
        </div>
      </div>


    );
  }
}
