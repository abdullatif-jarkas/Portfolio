// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Slider.css'

type TDataItem = {
  title?: string,
  text?: string,
  icon?: any,
  link?: string,
};
type TData = Array<TDataItem>; 

const Slider = ({ slides }: {slides: TData}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        slides.map((slide: TDataItem) => (
          <SwiperSlide>
            <h3 className='slider-title'>{slide.title}</h3>
            <p className='slider-text'>{slide.text}</p>
            <a className='slider-link' href={slide.link}>{slide.icon} <span>Try it Now!</span></a>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Slider