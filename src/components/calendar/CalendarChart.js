import React from 'react';

import calendarChart from '../d3/calendarChart';

class CalendarChart extends React.Component {
    componentDidMount(){
        calendarChart(this.props.data, this.props.value);
    }

    componentDidUpdate(){
        calendarChart(this.props.data, this.props.value);
    }

    render(){
        return <div className='calendar-chart' />
    }
}

export default CalendarChart;