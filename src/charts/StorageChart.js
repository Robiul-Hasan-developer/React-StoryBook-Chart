import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StorageChart = ({ StorageChartoptions, height, width, usedStorage, totalStorage}) => {

    const galleryIcon =  `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 16 16" xml:space="preserve" class=""><g><g data-name="Layer 52"><path d="M18 1.25H6A4.75 4.75 0 0 0 1.25 6v12a.09.09 0 0 0 0 .05A4.75 4.75 0 0 0 6 22.75h12a4.75 4.75 0 0 0 4.74-4.68V6A4.75 4.75 0 0 0 18 1.25zM21.25 16l-4.18-4.78a2.84 2.84 0 0 0-4.14 0l-2.87 3.28-.94-1.14a2.76 2.76 0 0 0-4.24 0l-2.13 2.57V6A3.26 3.26 0 0 1 6 2.75h12A3.26 3.26 0 0 1 21.25 6z" fill="#fff" opacity="1" data-original="#000000"></path><circle cx="7" cy="7" r="2" fill="#fff" opacity="1" data-original="#000000"></circle></g></g></svg>`; 
    
    return (
      <div className='custom-card storage-custom-card'>
            <div className='storage-card__left d--flex gap--3'>
                <span className='storage-card__icon'>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(galleryIcon)}`} alt="Gallery Icon" />
                </span>
                <div className='storage-card__inner'>
                    <h5 className='custom-card__title mb-0'>Storage </h5>
                    <div className='storage-card__content'>
                        <h5 className='storage-card__amount custom-card__title'> {usedStorage} GB</h5>
                        <span className='storage-card__text'>of {totalStorage} GB</span>
                    </div>
                </div>
            </div>
         
            <div className='semi-circle-gauge'>
                <ReactApexChart options={StorageChartoptions} series={[usedStorage / totalStorage * 100]} type="radialBar" height={height} width={width} />
            </div>
      </div>
    );
  };
  
export default StorageChart;




