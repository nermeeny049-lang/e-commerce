"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeSliderImage from "../../../assets/home-slider-1.png";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
export default function HomeSlider() {
  return (
    <>
      <section className="relative">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div
              className="py-20 text-white"
              style={{
                backgroundImage: `linear-gradient(to bottom right,#14532dcc,
    #22c55e66), url('${HomeSliderImage.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <h2 className="text-3xl mb-3 font-extrabold max-w-96">
                  Fresh Products Delivered to your Door
                </h2>
                <p>Get 20% off your first order</p>
                <div className="action-btns">
                  <button className="btn mt-5 me-3 bg-white border border-white text-primary-600 hover:scale-105 transition-transform duration-200">
                    Shop Now
                  </button>
                  <button className="btn mt-5 me-3 bg-transparent border-white border text-white hover:scale-105 transition-transform duration-200">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="py-20 text-white"
              style={{
                backgroundImage: `linear-gradient(to bottom right,#14532dcc,
    #22c55e66), url('${HomeSliderImage.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <h2 className="text-3xl mb-3 font-extrabold max-w-96">
                  Fresh Products Delivered to your Door
                </h2>
                <p>Get 20% off your first order</p>
                <div className="action-btns">
                  <button className="btn mt-5 me-3 bg-white border border-white text-primary-600 hover:scale-105 transition-transform duration-200">
                    Shop Now
                  </button>
                  <button className="btn mt-5 me-3 bg-transparent border-white border text-white hover:scale-105 transition-transform duration-200">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="py-20 text-white"
              style={{
                backgroundImage: `linear-gradient(to bottom right,#14532dcc,
    #22c55e66), url('${HomeSliderImage.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <h2 className="text-3xl mb-3 font-extrabold max-w-96">
                  Fresh Products Delivered to your Door
                </h2>
                <p>Get 20% off your first order</p>
                <div className="action-btns">
                  <button className="btn mt-5 me-3 bg-white border border-white text-primary-600 hover:scale-105 transition-transform duration-200">
                    Shop Now
                  </button>
                  <button className="btn mt-5 me-3 bg-transparent border-white border text-white hover:scale-105 transition-transform duration-200">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="prev-btn hover:scale-105 transition-transform duration-200 size-8 rounded-full bg-white flex justify-center items-center text-primary-600 shadow-md absolute top-1/2 -translate-y-1/2 left-5 z-50">
          <IconChevronLeft stroke={2} />
        </button>
        <button className="next-btn hover:scale-105 transition-transform duration-200 size-8 rounded-full bg-white flex justify-center items-center text-primary-600 shadow-md absolute top-1/2 -translate-y-1/2 right-5 z-50">
          <IconChevronRight stroke={2} />
        </button>
      </section>
    </>
  );
}
