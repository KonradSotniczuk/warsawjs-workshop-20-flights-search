import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {AirportModel} from "../models/AirportModel";

export class SelectAirport extends Component {

    state = {
        selectedAirport: '' //cannot be null, as it would be un-controlled input
    };

    extractSelectedValue(event) {
        return event.target.value;
    }

    render() {
        const {onChange, airports, label} = this.props;
        const {selectedAirport} = this.state;
        return (
            <div>
                <InputLabel htmlFor="from">{label}</InputLabel>
                <Select
                    autoWidth
                    value={selectedAirport}

                    onChange={(event) => {
                        const airportIndex = this.extractSelectedValue(event);
                        this.setState({
                            selectedAirport: airportIndex
                        });
                        //we need to call 'onChange' with the airport! and the value is just an index
                        onChange(airports[airportIndex]);
                    }}
                    inputProps={{
                        name: 'airport-select',
                        id: 'airport-select',
                    }}
                >
                    {airports.map((airport, index) => <MenuItem key={airport.id}
                                                       value={index}>{airport.country}</MenuItem>)}
                </Select>

                <br/>
            </div>
        )
    }
}

SelectAirport.propTypes = {
    onChange: PropTypes.func.isRequired,
    airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel)),
    label: PropTypes.string
};

SelectAirport.defaultProps = {
    label: 'SELECT'
};
