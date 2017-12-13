import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};



/*The purpose of renderSortByOptions() is to dynamically create the list
items needed to display the sort options (Best Match, Highest Rated, Most Reviewed).
This is to help future proof against potential changes to the Yelp API.*/
export class SearchBar extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        term: '',
        location: '',
        sortBy: 'best_match'};
      this.handleSortByChange = this.handleSortByChange.bind(this);
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);

  }

  getSortByClass(sortByOption){
    if(this.state.sortBy===sortByOption){
      return 'active';
      } else {
        return '';
       }
  }

  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event){
    this.setState({term: event.target.value});
  }

  handleLocationChange(event){
    this.setState({
      location: event.target.value
    });
  }

  handleSearch(event){
    this.props.searchYelp(event.term,event.location,event.sortBy);
    event.preventDefault();
  }

  renderSortByOptions(){
    return (Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return(<li
               key={sortByOptionValue}
               className={this.getSortByClass(sortByOptionValue)}
               onClick={this.handleSortByChange.bind(this,sortByOptionValue)}
               >{sortByOption}</li>)
    }));
  }


  render(){
    return (
      <div className="SearchBar" searchYelp={this.handleSearch}>
        <div className="SearchBar-sort-options">
           <ul>
            {this.renderSortByOptions()}
           </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Lets Go</a>
        </div>
      </div>

      );
  }
};
