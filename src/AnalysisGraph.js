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

  getBackgroundColor = (tone) => {
    const colorMap = {
      anger: '#DB3650',
      disgust: '#00A594',
      fear: '#67338B',
      joy: '#FDD448',
      sadness: '#007AAB',
      analytical: '#E05A36',
      confident: '#DA3560',
      tentative: '#6C63A5',
      openness_big5: '#E8863B',
      conscientiousness_big5: '#78338B',
      extraversion_big5: '#00ABE9',
      agreeableness_big5: '#98216D',
      emotional_range_big5: 'pink'
    };
    return colorMap[tone];
  }

  shouldComponentUpdate(nextProps) {
    const { analysis } = this.props;
    return !isEqual(analysis, nextProps.analysis);
  }

  createBarChart() {
    const { height, width, analysis } = this.props;

    const node = this.node;
    d3.select(node).selectAll("*").remove()

    const tones = get(analysis, ['document', 'tones'], {});
    const data = Object.keys(tones).map(key => ({
      value: tones[key],
      name: key,
      color: this.getBackgroundColor(key)
    }));

    const margin = { top: 20, right: 30, bottom: 60, left: 30 };
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

    const group = d3.select(node)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left + margin.right},${margin.top})`)
      .attr('width', width - margin.left - margin.right)
      .attr('height', height - margin.top - margin.bottom)

    const max = Math.max(...data.map(d => Math.abs(d.value)));

    x.domain(d3.extent([-max, max])).nice();
    y.domain(data.map(d => d.name));

    group.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => x(Math.min(0, d.value)))
      .attr("y", d => y(d.name))
      .attr("width", d => Math.abs(x(d.value) - x(0)))
      .attr("height", y.bandwidth())
      .attr("fill", d => d.color)
      .exit()
      .remove();

    group.append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(xAxis)

    const ticks = group.append("g")
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
