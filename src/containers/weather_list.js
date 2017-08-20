import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        console.log(lon)

        return (
            // why it can find out city one by one : map function
            // why city keep increase : reducer_weather.js
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color="orange" unit="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="orange" unit="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="black" unit="%"/>
                </td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }){
 // this get the weather from state
 return { weather };
 // why? is it set up a state here? Just like constructor in the past?
 // it will connect to redcuer/redux
}

// it will use mapStateToProps function and pass state
// but how can it can pass state without paramater?
export default connect(mapStateToProps, null)(WeatherList);
// As man said it is new systax, will pass variable into the function inside function