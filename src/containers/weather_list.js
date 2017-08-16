import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component{
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>

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