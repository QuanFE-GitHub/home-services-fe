import React from 'react';
import './AboutBanner.scss';
import aboutBannerImg from 'src/assets/images/homeCleaning.png';
import blobIcon from 'src/assets/icons/ic_blob.svg';
// import saleTagIcon from 'src/assets/icons/ic_sale_tag.svg';
import saleTagIcon from 'src/assets/icons/ic_like.svg';

const AboutBanner = () => {
  return (
    <div className='aboutBanner'>
      <div className='aboutBannerImg'>
        <img className='aboutBannerImage' src={aboutBannerImg} alt='aboutBannerImg' />
        <img className='aboutBannerBlob' src={blobIcon} alt='blobIcon' />
      </div>
      <div className='aboutBannerContent'>
        <div className='aboutBannerTitle'>
          House cleaning services <br /> <span>at your convenience</span>
        </div>
        <p className='aboutBannerDesc'>
          We will work with your schedule to have your location cleaned at your convenience. We are available 7-days a
          week to meet your specific needs.
        </p>
        <div className='aboutBannerReview'>
          <div className='aboutBannerReviewItem'>
            <div className='aboutBannerReviewItemImg'>
              <img src={saleTagIcon} alt='saleTagIcon' />
            </div>
            <div className='aboutBannerReviewItemTitle'>Expert cleaning technicians</div>
          </div>
          <div className='aboutBannerReviewItem'>
            <div className='aboutBannerReviewItemImg'>
              <img src={saleTagIcon} alt='saleTagIcon' />
            </div>
            <div className='aboutBannerReviewItemTitle'>Affordable pricing</div>
          </div>
          <div className='aboutBannerReviewItem'>
            <div className='aboutBannerReviewItemImg'>
              <img src={saleTagIcon} alt='saleTagIcon' />
            </div>
            <div className='aboutBannerReviewItemTitle'>Guaranteed results</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
