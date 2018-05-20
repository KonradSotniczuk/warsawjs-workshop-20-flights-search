import axios from 'axios';
import {AirportModel} from './shared/models/AirportModel.js';

export class AirportService {

  static API_URL = `http://warsawjs-flights-api.herokuapp.com`;

  static getAirportSources() {
    return axios.get(`${this.API_URL}/airports`)
      .then(response => {
          return response.data.map(item => new AirportModel(item))
      });
  }
}
