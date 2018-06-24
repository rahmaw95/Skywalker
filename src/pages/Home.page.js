import React, { Component } from 'react';
import map from 'lodash/map';
import concat from 'lodash/concat';
import axios from 'axios';
import LukeCard from '../components/Card/lukeCard.component';
import MoviesCard from '../components/Card/moviesCard.component';
import LukeBackground from '../components/Background/lukeBackground.component';
import MoviesBackground from '../components/Background/moviesBackground.component';


export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      loading: false,
      page: 1,
      films: [],
      dataFilm: []
    }

    this.fetchApiFilm = this.fetchApiFilm.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleData();
    this.handleFilm();
    this.setState({ loading: false });
    let filmsArr = [];
    // axios.get('https://swapi.co/api/people/').then(res => {
    //   let data = res.data.results[0].films;
    //   if(data.length > 0){
    //     data.map(function(url, index){
    //       axios.get(url).then(res => {
    //         let dataFilm = res.data;
    //         filmsArr.push({
    //           title: dataFilm.title,
    //           director: dataFilm.director
    //         });
    //       }).catch((err) => {
    //         console.log('error: ', err);
    //       });
    //     });
    //     this.setState({ dataFilms: filmsArr });
    //     console.log('state films : ', this.state.dataFilms);
    //   }
    // });
    axios.get('https://swapi.co/api/people/').then(res => {
      let data = res.data.results[0].films;
      console.log('people : ', res.data.results);
    });

    axios.get('https://swapi.co/api/films/').then(res => {
      let data = res.data.results;
      this.setState({ films: data });
    });
  }

  handleData(){
    //console.log('handleData');
    let elements = [];
      fetch('https://swapi.co/api/people/')
      .then(results => {
        return results.json();
      }).then(data => {
//bikin if buat film
        this.setState({
          data: data.results[0],
          page: this.state.page + 1,
          loading: true,
          films: data.results[0].films
        })


      })



  }

  fetchApiFilm = (film) => {
    //console.log('fetchApiFilm: ', film);
    // let dataItem = [];
    // fetch(film)
    // .then(results => {
    //   return results.json();
    // }).then(data => {
    //   console.log('data nih: ', data, ' dataItem: ', dataItem);
    //   dataItem.push(data);
    //
    //
    // })
    // console.log('dataItem function: ', dataItem);
  }

  handleFilm = () => {
    //console.log('handleFilm');
    //if(this.state.films !== '') {

      map(this.state.films, function(film) {
        //console.log('akhir dataItem:', film);
        this.fetchApiFilm(film);

      });

    //}
  }


  render() {
    //console.log('dataFilm: ', this.state.dataFilm, ' length: ', this.state.dataFilm.length);
    return (
        <div className="App">
          <LukeBackground>
            <LukeCard
                data={this.state.data} />
            {/* {
              this.state.loading &&
                <p>Loading.....</p>
            } */}
          </LukeBackground>
          <MoviesBackground>
            <MoviesCard
              dataFilms={this.state.dataFilms} />
          </MoviesBackground>
        </div>

    );
  }
}
