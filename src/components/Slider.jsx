/* eslint-disable import/no-anonymous-default-export */
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay , EffectCube} from 'swiper';
import SwiperCore, { EffectFade } from 'swiper';

import img from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'


import 'swiper/css';

import './slider.css';

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
  const id = rand(1, 200);
  return `https://picsum.photos/id/${id}/1920/800`;
}
SwiperCore.use([Autoplay, EffectCube]);
function createSlide(url) {
  return (
    <>
    <SwiperSlide >
      
             <img className="img" src={url} alt="" />
            
    </SwiperSlide>

 

    </>
  );
}

export default () => {
  return (
    <Swiper 
      modules={[ Autoplay, EffectFade, EffectCube]}
      slidesPerView={1}
      

      autoplay={{ delay: 4000 }}
      fadeEffect={{ crossFade: true }}
    >      {createSlide(img2)}
      {createSlide(img)}
      {createSlide(img3)}

      
    </Swiper>
  );
};
