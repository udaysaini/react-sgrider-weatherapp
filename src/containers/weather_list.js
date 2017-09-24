import React from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends React.Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map( weather => weather.main.temp ), (temp) => temp - 273 );

        const pressures = cityData.list.map( weather => weather.main.pressure );
        const humidities = cityData.list.map( weather => weather.main.humidity );

        const { lon, lat } = cityData.city.coord;


        console.log('temp', cityData);

        return(
            <tr key={name}>
                <td> <GoogleMap lat={lat} lon={lon} /> </td>
                <td> <Chart color='blue' data={ temps } units='C' /> </td>
                <td> <Chart color='red' data={ pressures } units="hPa" /> </td>
                <td> <Chart color='black' data={ humidities } units="%" /> </td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>{ this.props.weather.map(this.renderWeather) }</tbody>
            </table>

        )
    }
}

function mapStateToProps(state) {
    //console.log('state', state);
    return { weather: state.weather }
}

//Also can be written as . -
// function mapStateToProps( {weather} ) {
//     return { weather };
// }

export default connect(mapStateToProps, null)(WeatherList) ;