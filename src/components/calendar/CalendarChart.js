import React from 'react';

import calendarChart from '../d3/calendarChart';

class CalendarChart extends React.Component {
    componentDidMount(){
        calendarChart(this.props);
    }

    componentDidUpdate(){
        calendarChart(this.props);
    }

    render(){
        return <div className='calendar-chart' />
    }
}

export default CalendarChart;