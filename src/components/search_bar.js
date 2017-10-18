// Don't forget to import React in all your components
import React, {Component} from 'react';

//Class based component. Must have a render method that returns some JSX
class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    // adding the handler to input
    return (

       //this is called a controlled input
      <div className='search-bar'>
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
//whenever content of the input changes. its calls onInputchange with the new value
    );
  }

  onInputChange(term){
    this.setState({term});
    // it sets the state of this Component
    this.props.onSearchTermChange(term);
    //cals the props on searchtermChange with the new value

  }

  // //theEventHandler
  // onInputChange(event) {
  //
  //   console.log(event.target.value);
  //
  // }
}

export default SearchBar;
