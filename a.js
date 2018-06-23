import React, { Component } from 'react';
import ListView from './ListView';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      loading: false,
      page: 1
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleData();
    this.setState({ loading: false });
  }

  handleData(){
    let elements = [];
      fetch('https://webapi.indotrading.com/api/indotradingcatalog?companyId=Co54247&name=&categoryid=0&brandName=&iPage='+this.state.page+'&iPageSize=10&IsAlreadyStock=false')
      .then(results => {
        return results.json();
      }).then(data => {

        this.setState({
          data: data.objectReturn.oIndotradingCatalogList[0],
          page: this.state.page + 1,
          loading: true
        })
      })
  }

  handleScroll = async(event) => {
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if(scrolledToBottom) {
      this.handleData();
    }

  }
  render() {
    console.log('check state: ', this.state);
    return (
      <div className="App">
        <ul>
            <li>
              <div>Brand</div>
              <div>Image</div>
              <div>Description</div>
            </li>
            <ListView
                      data={this.state.data} />
            {
              this.state.loading &&
                <li>Loading.....</li>
            }

        </ul>
      </div>
    );
  }
}
