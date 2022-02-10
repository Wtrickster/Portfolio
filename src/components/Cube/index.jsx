// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Projects from "../Projects";
import Intro from "../Intro"
import Contact from "../Contact";
import Bot from "../ChatBot";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,EffectCube,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,EffectCube,Pagination]);

function Cube() {
  return (
    <>
    <Swiper effect={'cube'} grabCursor={true} loop={true} cubeEffect={{
          "shadow": true,
          "slideShadows": true,
          "shadowOffset": 300,
          "shadowScale": .75
        }} autoplay={{
        "delay": 5000,
        "disableOnInteraction": true
      }}
      pagination={true} className="mySwiper3 swiper-h">
      <SwiperSlide>
        <Intro />
      </SwiperSlide>
      <SwiperSlide>
        <Projects />
      </SwiperSlide>
      <SwiperSlide>
        <Bot />
      </SwiperSlide>
      <SwiperSlide>
        <Contact />
      </SwiperSlide>
    </Swiper>
    </>
  )
}
export default Cube;