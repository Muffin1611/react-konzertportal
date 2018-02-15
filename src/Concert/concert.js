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
                <h1>Concerts!</h1>
                {this.state.concerts.map(function(concert) {
                    return (
                        <div key={concert.id} className="concert">
                            <a href="placeholder.asp">
                                {concert.name}
                                has a price of
                                {concert.price}
                            </a>
                        </div>
                    );
                })}
            </div>
        )

    }

}