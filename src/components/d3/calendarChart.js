import { scaleLinear, scaleOrdinal, scaleBand, extent, select, axisBottom, axisLeft, max, stack } from 'd3';

const calendarChart = (props) => {
    console.log('calendarChart is reached and data is : ');

    const width = 800;
    const height = 590;

    const margin = {
        top: 40,
        bottom: 40,
        left: 60,
        right: 40
    };

    const colorFill = {
        work: 'blue',
        personal: 'yellow',
        others: 'green'
    }

    const data = props.data;
    console.log(data);

    const innerHeight = height - margin.top -margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const svg = select('.calendar-chart').append('svg')
        .attr('height', height)
        .attr('width', width)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const xExtent = extent(data, d => d);
    const yExtent = extent(data, d => d);
    const xMax = max(data, d => (d.personal.hours + d.work.hours + d.others.hours));

    const xScale = scaleLinear()
        .domain([0, xMax])
        .range([0, innerWidth])
        .nice()

    const yScale = scaleBand()
        .rangeRound([height, 0], .1)
        .domain(data.map(d => d.name))

    const xAxis = axisBottom()
        .scale(xScale)
        .tickSize(5)
        .tickPadding(10)

    const yAxis = axisLeft()
        .scale(yScale)
        .tickSize(0)

    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top+10})`)
        .call(yAxis);

        g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(xAxis);

        g.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('y', d => yScale(d.name))
        .attr('x', 0)
        .attr("width", d => xScale((d.personal.hours + d.work.hours + d.others.hours)))
        .join('g')
            .attr("fill", d => 'blue')
        .attr("stroke", "#fff")
        .attr("height", 40)

}


export default calendarChart;