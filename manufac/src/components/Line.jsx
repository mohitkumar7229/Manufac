import React from 'react';
import ReactEcharts from 'echarts-for-react';
import data from '../DB/Wine-Data.json'

const LineChart = () => {
  const option = {
    xAxis: {
      type: 'value',
      name: 'Flavanoids'
    },
    yAxis: {
      type: 'value',
      name: 'Ash'
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: {c}'
    },
    series: [{
      type: 'line',
      data: data.map(item => [item.Flavanoids, item.Ash])
    }]
  };
  const chartStyle = {
    height: '50vh',
    width: '100%'
  };

  return (
    <ReactEcharts option={option}  style={chartStyle}/>
  );
};

export default LineChart;
