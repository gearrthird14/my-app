import React, { useEffect } from "react";
// Styles
import styles from "./mainPage.module.scss";
// Swiper
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
// API
import { PROFILE_CONTENT } from "../../api/API";

const MainPage = () => {

  return (
    <div id="Home" className={styles.main}>
      <div  className={styles.main__content}>
        <Swiper
          loop={true}
          watchSlidesProgress={true}
          modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
          slidesPerView={1}
          centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          scrollbar={{
            draggable: true,
          }}
        >
          {PROFILE_CONTENT.map((item, index) => (
            <SwiperSlide className={styles.swiper__content} key={index}>
              {({ isActive }) => (
                <>
                  <img className={styles.img__content} src={item.img} alt="" />
                  <div
                    className={`${styles.content__wrapper} ${
                      isActive && styles.isActive
                    }`}
                  >
                    <div className={styles.content__text1}>{item.content}</div>
                    <div className={styles.content__text2}>{item.content2}</div>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainPage;
