import React from 'react';  
import { action } from '@storybook/addon-actions';
import StatisticsChart from './../charts/StatisticsChart';

export default {
  title: 'Charts/StatisticsChart',
  component: StatisticsChart,
};

const Template = (args) => <StatisticsChart {...args} />;

export const Statistic = Template.bind({});

Statistic.args = {
    statisticsChartSeries: [{
      name: 'User',
      data: [3, 4, 2.8, 5.1, 4.2, 3.9, 10]
    }, {
      name: 'Recruiters',
      data: [1.1, 3.2, 4.5, 3.2, 3.4, 5.2, 4.1]
    }],
    statisticsChartOptions: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        shadow: {
          enabled: true,
          color: '# ',
          top: 10,       
          left: 10,      
          blur: 5       
        }
      },
      xaxis: {
        categories: ["1", "2", "3", "4", "5", "6", "7"]
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return Math.round(val) + "h";
          }
        },
        min: 0,
        max: 8
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
    height: "400",
    width: "100%",
    onChartClick: action('chart clicked'),
};

