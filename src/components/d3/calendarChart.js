import { scaleLinear, extent, select, axisBottom, axisLeft } from 'd3';

const calendarChart = (props) => {
    console.log('calendarChart is reached');

    const width = 800;
    const height = 590;

    const margin = {
        top: 40,
        bottom: 40,
        left: 40,
        right: 40
    } 

    const innerHeight = height - margin.top -margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const svg = select('.calendar-chart').append('svg')
        .attr('height', height)
        .attr('width', width)

    const xExtent = extent(props, d => d);
    const yExtent = extent(props, d => d);

    const xScale = scaleLinear()
        .domain(xExtent)
        .range([0, innerWidth])
        .nice()

    const yScale = scaleLinear()
        .domain(yExtent)
        .range([innerHeight, 0])
        .nice()

    const xAxis = axisBottom()
        .scale(xScale)
        .tickSize(5)
        .tickPadding(10)

    const yAxis = axisLeft()
        .scale(yScale)
        .tickSize(5)
        .tickPadding(10)

    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`)
        .call(yAxis);

        g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(xAxis);
}


export default calendarChart;