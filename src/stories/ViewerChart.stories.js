// src/stories/ViewerChart.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import ViewerChart from '../charts/ViewerChart';

export default {
  title: 'Charts/ViewerChart',
  component: ViewerChart,
};

const Template = (args) => <ViewerChart {...args} />;

export const Viewers = Template.bind({});


Viewers.args = {
    chartOptions: {
      series: [60],
      labels: ['Incognito', 'Users', 'Recruiters'],
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
          },
        },
      },
    },
    chartSeries: [8, 5, 10],
    height: '350',
    onChartClick: action('chart clicked'),
};



