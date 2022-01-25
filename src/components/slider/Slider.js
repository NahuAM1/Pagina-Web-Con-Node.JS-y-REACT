import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from "../../media/amigos2.jpg"
import imageTwo from "../../media/yo3.jpg"
import imageThree from "../../media/yo2.jpg"
import "./Slider.css"

const Slider = () => {
  return (
      <div class = "carousel-container">
          <div class = "carousel-title">
            <h2>Galeria</h2>
          </div>
            <Carousel plugins={['arrows']}>
              <div class = "img-conteiner">
                <img class = 'slider-img' src={imageOne} />
                <div class = "slide-desc">
                  <span>Foto con amigos</span>
                </div>
              </div>
              <div class = "img-conteiner">
                <img class = 'slider-img' src={imageTwo} />
                <div class = "slide-desc">
                  <span>Atardecer en las sierras</span>
                </div>
              </div>
              <div class = "img-conteiner">
                <img class = 'slider-img' src={imageThree} />
                <div class = "slide-desc">
                  <span>Día de campo</span>
                </div>
              </div>
            </Carousel>
            </div>
  )
};

export default Slider;