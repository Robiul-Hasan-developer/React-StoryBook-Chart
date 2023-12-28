// ViewerChartStories.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import chartCass from '../stories/allCharts.css'

const Viewer = ({ chartOptions, chartSeries, height, onChartClick }) => {

  const totalViewers = chartSeries.reduce((total, value) => total + value, 0);
  const showAlert = totalViewers < 30; 

  const seriesSum = chartSeries.reduce((seriesNumber, seriesValue) => seriesNumber + seriesValue, 0);

  return (
    <div className='custom-card viewers-chart'>
      <h5 className='custom-card__title'>Viewers</h5>
        <div className='viewers-chart__inner'>
            <div className='viewers-chart__content'>
              {
                chartOptions.labels.map((label, index) => (
                  <div className='viewers-chart__item' key={index}>
                    <span className='viewers-chart__number'>
                      <span className={`legend-circle bg-${index === 0 ? 'base-two' : index === 1 ? 'base' : 'secondary'}`}></span>
                      {chartSeries[index]} 
                    </span>
                    <span className='viewers-chart__text'>{label}</span>
                  </div>
                ))
              }
            </div>
            <div className='viewers-chart__chart'>
              <h5 className='viewers-chart__total'>{seriesSum}</h5>
              <ReactApexChart
                  options={{
                    ...chartOptions,
                    colors: ['#FF92AE', '#4C6FFF', '#A6B7D4'],
                  }}  
                  series={chartSeries}
                  type="donut"
                  height={height}
                  onClick={onChartClick}
                />
            </div>
        </div>
        {showAlert && (
          <span className='alert-message'>Alert: Total viewers are less than 30!</span>
        )}
    </div>
  );
};

export default Viewer;

