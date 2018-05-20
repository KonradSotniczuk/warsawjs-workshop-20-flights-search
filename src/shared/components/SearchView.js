import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SearchButton} from "./SearchButton";
import {AirportModel} from "../models/AirportModel";
import {SelectAirport} from "./SelectAirport"

export class SearchView extends Component {
  state = {
         valueFrom: null,
         valueTo: null
     };
     handleChange = (event) => {
         this.setState({value: event.target.value});
     }

     _updateAirport = (key, airport) => {
         this.setState({
             [key]: airport  //[key] is a dynamic property name based on value of 'key'
         }, () => {console.log(this.state)});
     };//no need to .bind to be aware of THIS
     
  render() {
//    const {onClick, airports} = this.props;
      const {onSearchClick, airports} = this.props;
      return (
         <div>
         <SelectAirport onChange={console.log} airports={airports}/>
         <SelectAirport onChange={console.log} airports={airports} label={'TO'}/>
         <br/>

         <SearchButton text={`Search for the flights`} onClick={onSearchClick}/>
         </div>
       )
  }
}

SearchView.propTypes = {
  onClick: PropTypes.func.isRequired,
      airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel))
};

//             <select value={this.state.value} onChange={this.handleChange}>{airports.map(
//             (airport, index) => <option value={airport.index}>{airport.city}</option>
//             )}</select>


//            <SearchButton text={`Search for the flight`} onClick={onClick}/>
