import React from 'react';
import Image from '../images/colorful-img.png';


const EthCard = ({title, designation, ETHQty, time}) => {

    const ethIcon = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 12 12" xml:space="preserve" class=""><g><path d="M28.09 65.65 64 7l35.91 58.65L64 86.57z" fill="#000000" opacity="1" data-original="#000000" class=""></path><path d="m64 93.16 34.76-21.58L64 121 28.42 71.58z" fill="#000000" opacity="1" data-original="#000000" class=""></path></g></svg>`
    
    return (
        <div className='custom-card heaven-info-card flex--align gap--4'>
            <div className='heaven-info flex--align gap--3'>
                <div className='heaven-info__thumb'>
                    <img src={Image} alt=""/>                    
                </div>
                <div className='heaven-info__content'>
                    <h5 className='custom-card__title'> {title}</h5>
                    <span className='custom-card__name'> By {designation} </span>
                </div>
            </div>
            <div className='eth-info'>
                <div className='eth-info__content flex--align gap--3'>
                    <h5 className='custom-card__title'> 
                        <img src={`data:image/svg+xml;utf8,${encodeURIComponent(ethIcon)}`} alt="ETH Icon" />
                        {ETHQty}ETH
                    </h5>
                    <span className='custom-card__time'> {time} ago</span>
                </div>
            </div>
        </div>
    );
};

export default EthCard;