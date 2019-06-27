import React from 'react';
import socketIOClient from 'socket.io-client';

import CalendarChart from './CalendarChart';

class ScheduleManager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            response: false,
            endPoint: 'http://localhost:4001/'
        }
    }

    componentDidMount(){
        const { endPoint } = this.state;
        const socket = socketIOClient(endPoint);
        socket.on("FromAPI", data => this.setState({response: data }));
        console.log(this.state.response)
    }

    render(){
        const { response } = this.state;
        return response ? <CalendarChart data={this.state.response} value={this.props.value}/> : null
    }
}

export default ScheduleManager;