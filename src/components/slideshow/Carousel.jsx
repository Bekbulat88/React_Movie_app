import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import sampleImg from '../../assets/img/mock.json';
import style from './Carousel.module.scss';
import 'swiper/element/css/autoplay';
import { register } from 'swiper/element/bundle';
import { useDispatch, useSelector } from 'react-redux';
import { trendingMoviesRequestAsync } from '../../redux/trendingMovies/trendingMoviesSlice';
import 'swiper/scss';
import { getGenreListAsync } from '../../redux/genre/genreSlice';
import { Link } from 'react-router-dom';
register();

const Carousel = () => {
  const swiperElRef = useRef(null);
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.trendingMovies);
  const { genreList } = useSelector((state) => state.genre);

  useEffect(() => {
    dispatch(trendingMoviesRequestAsync());
  }, []);

  useEffect(() => {
    dispatch(getGenreListAsync());
  }, []);
  console.log(genreList);
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
    });
    swiperElRef.current.addEventListener('slidechange', (e) => {});
  }, []);

  const slideClickHandle = (event) => {
    movieList.forEach((elem) => {
      if (elem.backdrop_path === event.target.src) console.log(elem.id);
    });
  };

  return (
    <div className={style.swiperWrapper}>
      <swiper-container
        ref={swiperElRef}
        loop="true"
        slides-per-view="1"
        navigation="true"
        pagination="true"
      >
        {movieList.map((movie, index) => {
          if (index < 4) {
            return (
              <SwiperSlide className={style.swiperSlide} key={movie.id}>
                <Link to={`/videoPage?id=${movie.id}`}>
                  <div className={style.info}>
                    <h2 className={style.title}>{movie.title}</h2>
                    <p className={style.dateGenre}>
                      {movie.release_date.slice(0, 4)} |
                      {genreList.map((obj) => {
                        for (let item of movie.genre_ids) {
                          if (obj.id === item) {
                            return <span className={style.span}>{obj.name}</span>;
                          }
                        }
                      })}
                    </p>
                    <p className={style.overview}>{movie.overview}</p>
                  </div>

                  <img
                    className={style.slideImage}
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt="title"
                  />
                </Link>
              </SwiperSlide>
            );
          }
        })}
      </swiper-container>
    </div>
  );
};

export default Carousel;
