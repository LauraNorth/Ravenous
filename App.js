import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BusinessList} from './components/BusinessList/BusinessList.js';
import {SearchBar} from './components/SearchBar/SearchBar.js';
import {Yelp} from './util/Yelp.js';


// const business = {
// imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
// name: 'MarginOtto Pizzeria',
// address: '1010 Paddington Way',
// city: 'Flavortown',
// state: 'NY',
// zipCode: '10101',
// category: 'Italian',
// rating: 4.5,
// reviewCount: 90
// };
//
//
// //this is my App.js right after my const business
// let businesses = new Array(6).fill('');


class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
  Yelp.search(term, location, sortBy).then(businesses=>{
    this.setState({businesses: businesses})
  })
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList business={BusinessList} />
      </div>
    );
  }
}

export default App;
