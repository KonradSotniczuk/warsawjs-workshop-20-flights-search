import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchButton} from './shared/components/SearchButton'
import {FlightsView} from './shared/components/FlightsView'
import {SearchView} from './shared/components/SearchView'
import {AirportModel} from './shared/models/AirportModel.js'
import {AirportService} from './AirportService.js'

class App extends Component {
  constructor(props){
          super(props);
          this.searchPressed = this.searchPressed.bind(this);
          this.onBackClick = this.onBackClick.bind(this);
      }

  state = {
      searchVisible: true,
      airports: [],
      value: ''
  };

  searchPressed() {
      this.setState({
          searchVisible: false
      })
  }

  onBackClick() {
    this.setState({
        searchVisible: true
    }, () => {
        console.log(this.state);
        });
    console.log(this.state);
}

componentDidMount() {
  AirportService.getAirportSources().then(airports => {
      console.log(airports);
      this.setState({
          airports    //shortcut
      })
  })
}

      render() {
        const{searchVisible, airports} = this.state;
        return (
             <div className="App">
               <header className="App-header">
                 <img src={logo} className="App-logo" alt="logo" />
                 <h1 className="App-title">Welcome to React</h1>
               </header>
                     {searchVisible && <SearchView onSearchClick={this.searchPressed} airports={airports} />}
               {!searchVisible && <FlightsView onClick={this.onBackClick}/>}

             </div>

           )
      }
}


export default App;
