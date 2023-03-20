import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import sampleImg from '../../assets/img/mock.json';
import style from './Carousel.module.scss';
import 'swiper/element/css/autoplay';
import { register } from 'swiper/element/bundle';

register();

const Carousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <div className={style.swiperWrapper}>
      <swiper-container
        ref={swiperElRef}
        loop="true"
        slides-per-view="1"
        navigation="true"
        pagination="true"
      >
        {sampleImg.map((elem) => (
          <SwiperSlide className={style.swiperSlide} key={elem.image}>
            <img className={style.slideImage} src={elem.image} alt="title" />
          </SwiperSlide>
        ))}
      </swiper-container>
    </div>
  );
};

export default Carousel;
