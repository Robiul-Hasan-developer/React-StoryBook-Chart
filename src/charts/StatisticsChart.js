import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StatisticsChart = ({ statisticsChartOptions, statisticsChartSeries, height, width, onChartClick }) => {

    const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 14 14" xml:space="preserve" class="">
      <g>
        <path d="M28 24v-4a1 1 0 0 0-2 0v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3zm-6.38-5.22-5 4a1 1 0 0 1-1.24 0l-5-4a1 1 0 0 1 1.24-1.56l3.38 2.7V6a1 1 0 0 1 2 0v13.92l3.38-2.7a1 1 0 1 1 1.24 1.56z" data-name="Download" fill="#fff" opacity="1" data-original="#000000" class=""></path>
      </g>
    </svg>
  `;

  return (
    <div className='custom-card'>
        <div className='flex--between mb-4'>
            <h5 className='custom-card__title mb-0'>Statistics</h5>
            <button type="button" className='btn btn--base'> 
                <span className='icon-left'><img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgIcon)}`} alt="Export Icon" /></span>
                Export 
            </button> 
        </div>
        
        <div className='area-chart'>
            <ReactApexChart
            options={{
                ...statisticsChartOptions,
                    colors: [ '#4C6FFF', '#FF92AE'],
                }}
                series={statisticsChartSeries}
                type="line"
                height={height}
                width={width}
            />
        </div>
    </div>
  );
};

export default StatisticsChart;

    

