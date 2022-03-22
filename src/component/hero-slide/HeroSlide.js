import React, { useEffect, useState } from "react";
import tmdbApi, { movieType, category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button, { OutlineButon } from "../button/Button";
import { useHistory } from "react-router-dom";
import "./hero-slide.scss";
export default function HeroSlide() {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);
  const getMovies = async () => {
    const params = { page: 1 };
    try {
      const response = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });
      setMovieItems(response.results.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
const HeroSlideItem = (props) => {
  let history = useHistory();
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__infor">
          <h2 className="title"> {item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history.push("/movie/" + item.id)}>
              Xem ngay
            </Button>
            <OutlineButon onClick={() => console.log("trailer")} >
              Xem trailer
            </OutlineButon>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt=""/>
        </div>
      </div>
    </div>
  );
};
