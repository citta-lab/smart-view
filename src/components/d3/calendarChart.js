import { scaleLinear, transition, scaleBand, extent, select, axisBottom, axisLeft, max, stack } from 'd3';

const calendarChart = (rawData, value) => {
    
    // Important to remove otherwise it will add new chart
    select('.calendar-chart > *').remove();

    const width = 800;
    const height = 590;

    const margin = {
        top: 40,
        bottom: 40,
        left: 60,
        right: 40,
        buffer: 25
    };

    const colorFill = {
        work: 'blue',
        personal: 'yellow',
        others: 'green'
    }

    let data = rawData;

    let byDays = (value && value === 'days') ? true : false;

    // Total meeting time in hours
    const reducer = data.reduce((acc,value) => {
        return acc + (value.personal.hours + value.work.hours + value.others.hours)
    },0);

    const numPeople = data.length;
    const averageTime = byDays ? (reducer / (8*numPeople)) : (reducer / numPeople);
 
    const innerHeight = height - margin.top -margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const svg = select('.calendar-chart').append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const xExtent = extent(data, d => d);
    const yExtent = extent(data, d => d);

    const timeCal = (data) => {
        const workingHour = 8;
        const totalMeetingHour = data.personal.hours + data.work.hours + data.others.hours;
        return byDays ? (totalMeetingHour / workingHour) :  totalMeetingHour;
    }
    const xMax = max(data, d => timeCal(d));

    const xScale = scaleLinear()
        .domain([0, xMax])
        .range([0, innerWidth])
        .nice()

    const yScale = scaleBand()
        .rangeRound([innerHeight, 0], .1)
        .domain(data.map(d => d.name))

    const xAxis = axisBottom()
        .scale(xScale)
        .tickSize(5)
        .tickPadding(10)

    const yAxis = axisLeft()
        .scale(yScale)
        .tickSize(0)

    const g = svg.append('g')
        //.attr('transform', `translate(${margin.left},${margin.top})`)
        .call(yAxis);

        g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(xAxis);

    // Naming Axis 
    const xAxisText = g.append("text")   
        .attr("class", "label")        
        .attr("transform","translate(" + (innerWidth/2) + " ," + (innerHeight + margin.top + 10) + ")")
        .style("text-anchor", "middle")
    
    // Updating the Axis name
    const averageTimeFloor = Math.floor(averageTime);
    const inDays = `In Days ( average: ${averageTimeFloor} days )`;
    const inHours = `In Hours ( average: ${averageTimeFloor} hours )`;
    const inDaysFill = '#E58428';
    const inHoursFill = '#F5B555';
    byDays ? xAxisText.text(inDays).style('fill',inDaysFill) : xAxisText.text(inHours).style('fill',inHoursFill)
    
    // Used animation to load the bars
    const animate = transition().duration(1200);

    // Handling data below
    const bars = g.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
    
    bars.attr('class','bars')
        .attr('y', d => yScale(d.name) + margin.buffer)
        .attr('x', 0)
        .attr("height", 50)
        .transition(animate)
        .delay((d,i) => i * 500) // helps in loading one at a time.
        .attr("width", d => xScale(timeCal(d)))
        .attr("fill", d => byDays ? '#E58428' : '#F5B555')
        .attr("stroke", "#fff")
        
}


export default calendarChart;