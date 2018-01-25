import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import * as d3 from "d3";

class AnalysisGraph extends Component {

  componentDidMount() {
     this.createBarChart()
  }

  componentDidUpdate() {
     this.createBarChart()
  }

  shouldComponentUpdate(nextProps) {
    const { analysis } = this.props;
    return !isEqual(analysis, nextProps.analysis);
  }



  createBarChart() {
    const { height, width, analysis } = this.props;

    const node = this.node;

    const tones = get(analysis, ['document', 'tones'], {});
    const data = Object.keys(tones).map(key => ({
      value: tones[key],
      name: key,
      color: `#${(Math.random()*0xFFFFFF<<0).toString(16)}`
    }));

    const margin = { top: 20, right: 30, bottom: 40, left: 30 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const x = d3.scaleLinear()
      .range([0, chartWidth]);

    const y = d3.scaleBand()
      .rangeRound([0, chartHeight])
      .padding(0.1);

    const xAxis = d3.axisBottom()
      .scale(x);

    const yAxis = d3.axisLeft()
      .scale(y)
      .tickSize([6, 0]);

    d3.select(node)
      .attr('width', chartWidth + margin.left + margin.right)
      .attr('height', chartHeight + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    x.domain(d3.extent(data.map(d => d.value))).nice();
    y.domain(data.map(d => d.name));

    d3.select(node).selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => x(Math.min(0, d.value)))
      .attr("y", d => y(d.name))
      .attr("width", d => Math.abs(x(d.value) - x(0)))
      .attr("height", y.bandwidth())
      .attr("fill", d => d.color)
      .exit()
      .remove()

    d3.select(node).append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(xAxis)

    const ticks = d3.select(node).append("g")
      .attr("transform", `translate(${x(0)},0)`)
      .call(yAxis)
      .selectAll('.tick')
      .attr('x2', -6);

    const tickNegative = ticks.filter((d, i) => data[i].value < 0);
    const tickPositive = ticks.filter((d, i) => data[i].value >= 0);

    tickPositive.selectAll('line')
      .attr('x2', -6);

    tickNegative.selectAll('line')
      .attr('x2', 6);

    tickPositive.selectAll('text')
      .attr('x', -9)
      .style('text-anchor', 'end');

    tickNegative.selectAll('text')
      .attr('x', 9)
      .style('text-anchor', 'start');
  }

  render() {
    const { width, height, analysis } = this.props;
    return (
      analysis ? <svg
        ref={node => this.node = node}
        width={width}
        height={height}>
      </svg>
      : <div>No Results</div>
    )
  }
}

AnalysisGraph.propTypes = {
  id: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  percentComplete: PropTypes.number,
  analysis: PropTypes.object,
};

export default AnalysisGraph;
