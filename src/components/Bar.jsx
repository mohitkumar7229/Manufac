import React from 'react';
import ReactEcharts from 'echarts-for-react';
import data from '../DB/Wine-Data.json'

const BarChart = () => {
  const categories = [...new Set(data.map(item => item.Alcohol))];

  const option = {
    xAxis: {
      type: 'category',
      name: 'Alcohol',
      data: categories
    },
    yAxis: {
      type: 'value',
      name: 'Magnesium'
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: {c}'
    },
    series: [{
      type: 'bar',
      data: categories.map(category => {
        const values = data.filter(item => item.Alcohol === category).map(item => item.Magnesium);
        return Math.min(...values);
      })
    }]
  };
  const chartStyle = {
    height: '50vh',
    width: '100%'
  };

  return (
    <ReactEcharts option={option} style={chartStyle} />
  );
};

export default BarChart;
