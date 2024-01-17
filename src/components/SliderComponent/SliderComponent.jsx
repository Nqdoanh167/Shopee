/** @format */

import {Image} from 'antd';
import React from 'react';
import Slider from 'react-slick';
const SliderComponent = ({arrImages}) => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
   };
   return (
      <Slider {...settings} className={'slider'}>
         {arrImages.map((image) => {
            return <Image key={image} src={image} alt='slider' preview={false} style={{borderRadius: '6px'}} />;
         })}
      </Slider>
   );
};

export default SliderComponent;
