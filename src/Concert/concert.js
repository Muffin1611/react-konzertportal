/**
 * Created by Marvin on 15.02.2018.
 */
import React from 'react';
import './concert.css';

var axios = require('axios');

export class Concert extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
    return {
        concerts: []
    }
}

    componentDidMount() {
    var th = this;
    this.serverRequest =
        axios.get(this.props.source)
            .then(function(result) {
                th.setState({
                    concerts: result.data.concerts
                });
            })
}

    componentWillUnmount() {
    this.serverRequest.abort();
}


    render(){
        return (
            <div>
                <h2>Konzerte</h2>
            <div className="wrapper">
                {this.state.concerts.map(function(concert) {
                    return (
                        <div className="item">
                        <a href="#" key={concert.id}>
                            <h4>
                                {concert.name}
                            </h4>
                            <p id="eventList">
                                {concert.events[0]}<br/>
                                {concert.events[1]}
                            </p>
                        </a>
                        </div>
                    );
                })}
            </div>
            </div>
        )

    }

}