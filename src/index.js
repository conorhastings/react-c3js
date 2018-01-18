'use strict';

import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

export default class C3Chart extends Component {

  displayName: 'C3Chart'

  propTypes: {
    data: PropTypes.object.isRequired,
    size: PropTypes.object,
    padding: PropTypes.object,
    color: PropTypes.object,
    interaction: PropTypes.object,
    transition: PropTypes.object,
    oninit: PropTypes.func,
    onrendered: PropTypes.func,
    onmouseover: PropTypes.func,
    onmouseout: PropTypes.func,
    onresize: PropTypes.func,
    onresized: PropTypes.func,
    axis: PropTypes.object,
    grid: PropTypes.object,
    regions: PropTypes.array,
    legend: PropTypes.object,
    tooltip: PropTypes.object,
    subchart: PropTypes.object,
    zoom: PropTypes.object,
    point: PropTypes.object,
    line: PropTypes.object,
    area: PropTypes.object,
    bar: PropTypes.object,
    pie: PropTypes.object,
    donut: PropTypes.object,
    gauge: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object
  }

  componentDidMount() {
    this.renderChart();
  }

  componentWillUmount() {
    this.destroyChart();
  }

  destroyChart() {
    if (this.chart) {
      try {
        this.chart = this.chart.destroy();
      } catch (err) {
        throw new Error('Internal C3 error', err);
      }
    }
  }

  renderChart() {
    if (!this.isMounted()) {
      return;
    }

    if (this.chart) {
      this.destroyChart();
    }

    const data = this.props.data;
    const size = this.props.size || {};
    const padding = this.props.padding || {};
    const color = this.props.color || {};
    const interaction = this.props.interaction || {};
    const transition = this.props.transition || {};
    const oninit = this.props.oninit || function () {};
    const onrendered = this.props.onrendered || function () {};
    const onmouseover = this.props.onmouseover || function () {};
    const onmouseout = this.props.onmouseout || function () {};
    const onresize = this.props.onresize || function () {};
    const onresized = this.props.onresized || function () {};
    const axis = this.props.axis || {};
    const grid = this.props.grid || {};
    const regions = this.props.regions || [];
    const legend = this.props.legend || {};
    const tooltip = this.props.tooltip || {};
    const subchart = this.props.subchart || {};
    const zoom = this.props.zoom || {};
    const point = this.props.point || {};
    const line = this.props.line || {};
    const area = this.props.area || {};
    const bar = this.props.bar || {};
    const pie = this.props.pie || {};
    const donut = this.props.donut || {};
    const gauge = this.props.gauge || {};

    this.chart = require('c3').generate({
      bindto: findDOMNode(this),
      data,
      size,
      padding,
      color,
      interaction,
      transition,
      oninit,
      onrendered,
      onmouseover,
      onmouseout,
      onresize,
      onresized,
      axis,
      grid,
      regions,
      legend,
      tooltip,
      subchart,
      zoom,
      point,
      line,
      area,
      bar,
      pie,
      donut,
      gauge
    });
  }

  render() {
    this.renderChart();
    const className = this.props.className ? ' ' + this.props.className : '';
    const style = this.props.style ? this.props.style : {};
    return (<div className={className} style={style} />);
  }
}
