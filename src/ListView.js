import React, { Component } from 'react';

export default class ListView extends Component {
  render(){
    const data = this.props.data;
    console.log('data: ', data);
    return(
      <li key={data.name}>
        <div>{data.name}</div>
        <div>{data.gender}</div>
      </li>
    );
  }
}
