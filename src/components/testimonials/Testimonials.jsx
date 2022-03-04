import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpeg";
import AVTR2 from "../../assets/avatar2.jpeg";
import AVTR3 from "../../assets/avatar3.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Bill Gates",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis facere id aliquid veniam, obcaecati ea, sed voluptates totam optio, iure placeat maiores quas nulla qui sit corrupti ullam necessitatibus ut.",
  },
  {
    avatar: AVTR2,
    name: "Mark Zuckerberg",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis facere id aliquid veniam, obcaecati ea, sed voluptates totam optio, iure placeat maiores quas nulla qui sit corrupti ullam necessitatibus ut.",
  },
  {
    avatar: AVTR3,
    name: "Elon Musk",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis facere id aliquid veniam, obcaecati ea, sed voluptates totam optio, iure placeat maiores quas nulla qui sit corrupti ullam necessitatibus ut.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
