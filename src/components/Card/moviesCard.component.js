import React, { Component } from 'react';
import {map} from 'lodash';
import PropTypes from 'prop-types';
import img from '../../assets/img/luke.jpg';
import { setTimeout } from "core-js"

export default class moviesCard extends Component {
  constructor(props){
    super(props);


    this.state = {
      films: props.dataFilm ? props.dataFilm:""
    }
  }
  // static propTypes = {
  //   data: PropTypes.object,
  // };

  // componentDidMount() {
  //   //console.log('films: ', this.props.films);
  // }
  //
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   //console.log('nextProps: ', nextProps);
  //   this.handleFilm(nextProps.films);
  // }
  //
  // handleFilm = (films) => {
  //   //console.log('handleFilm');
  //   //if(this.state.films !== '') {
  //
  //     map(films, function(film) {
  //       //console.log('akhir dataItem:', film);
  //       //this.fetchApiFilm(film);
  //       let dataItem = [];
  //       fetch(film)
  //       .then(results => {
  //         return results.json();
  //       }).then(data => {
  //         //console.log('data nih: ', data, ' dataItem: ', dataItem);
  //         dataItem.push(data);
  //
  //
  //       })
  //       //console.log('dataItem function: ', dataItem);
  //     });
  //
  //   //}
  // }
  // fetchApiFilm = (film) => {
  //   //console.log('fetchApiFilm: ', film);
  //
  // }

  render(){
    let films = this.props.dataFilms;
    if(this.props.dataFilms != undefined){
      // this.setState({films: films})
      // console.log('data ada');
    }
    console.log(`state : `, this.state);

//    this.setState({films: data}
//    console.log('component data 2: ', data);
    //console.log('typeof : ', typeof data);
    // data.map((item, key) => {
    //   console.log(`item ke ${key} : `, item);
    // ["0"].director
    //
    // });
    return (
      <div>
      {
          this.state.films && this.state.films.map((item, key) => {
            //console.log(`data item ke ${key} : `, item);
            return(
            <div key={key}>
              <p>{item.title}</p>
            </div>
          );
        })
      }
      </div>

    );

  }
}
