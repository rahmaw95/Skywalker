import React, { Component } from 'react';
import img from '../../assets/img/luke.jpg';

export default class LukeCard extends Component {
  render(){
    const data = this.props.data;
    return(
      <div key={data.name}>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='title'>
              <div className='font'>
                {data.name}
              </div>
            </div>
          </div>
        </div>
        <div className='row lukeCard'>
          <div className='col-sm-3'>
            <img src={img} className='img-fluid'/>
          </div>
          <div className='col-sm-9 desc'>
            <table>
              <tbody>
                <tr>
                  <td style={{width:'33.3%'}}><b>Height </b></td>
                  <td style={{width:'33.3%', paddingLeft: 20}}>:</td>
                  <td style={{width:'33.3%'}}>{data.height}</td>
                </tr>
                <tr>
                  <td style={{width:'33.3%'}}><b>Mass</b></td>
                  <td style={{width:'33.3%', paddingLeft: 20}}>:</td>
                  <td style={{width:'33.3%'}}>{data.mass}</td>
                </tr>
                <tr>
                  <td style={{width:'33.3%'}}><b>Hair Color</b></td>
                  <td style={{width:'33.3%', paddingLeft: 20}}>:</td>
                  <td style={{width:'33.3%'}}>{data.hair_color}</td>
                </tr>
                <tr>
                  <td style={{width:'33.3%'}}><b>Skin Color</b></td>
                  <td style={{width:'33.3%', paddingLeft: 20}}>:</td>
                  <td style={{width:'33.3%'}}>{data.skin_color}</td>
                </tr>
                <tr>
                  <td style={{width:'33.3%'}}><b>Birth Year</b></td>
                  <td style={{width:'33.3%', paddingLeft: 20}}>:</td>
                  <td style={{width:'33.3%'}}>{data.birth_year}</td>
                </tr>
                <tr>
                  <td style={{width:'33.3%'}}><b>Gender</b></td>
                  <td style={{width:'33.3%', paddingLeft: 20}}>:</td>
                  <td style={{width:'33.3%'}}>{data.gender}</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    );
  }
}
