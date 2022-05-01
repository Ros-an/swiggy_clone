import React, {useState} from 'react';
import "./index.css";
import Carousel from 'nuka-carousel';
import One from "../../assets/images/one.webp";
import Two from "../../assets/images/two.webp";
import Three from "../../assets/images/three.webp";
import Four from "../../assets/images/four.webp";
import Five from "../../assets/images/five.webp";

const slides = [One, Two, Three, Four, Five];
function SwiggyCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <article className='home-carousel'>
      <Carousel
          cellSpacing={32}
          // animation={animation}
          autoplay={false}
          cellAlign={"left"}
          
          // heightMode={"max"}
          scrollMode={"remainder"}
          slideIndex={slideIndex}
          // slideListMargin={0}
          slidesToScroll={1}
          slidesToShow={4}
          // transitionMode={"scroll"}
          withoutControls={false}
          wrapAround={false}
          zoomScale={Number(1 || 0)}
          // renderAnnounceSlideMessage={({ currentSlide, slideCount }) => {
          //   return `Showing slide ${currentSlide + 1} of ${slideCount}`;
          // }}
          // renderTopCenterControls={({ currentSlide }) =>
          //   renderTopControls(currentSlide)
          // }
        >
            {slides.map((slide, index)=> {
              return (
                <div className='home-carousel__cards' key={index}>
                    <img src={slide} alt={`${index+1}`} />
                </div>
              )
            })}
        </Carousel>
    </article>
  )
}

export default SwiggyCarousel