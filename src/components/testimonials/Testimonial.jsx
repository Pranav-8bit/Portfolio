import React from "react";
import "./testimonial.css";
import Image1 from "../../assets/avatar-3.svg";
import Image3 from "../../assets/devtown.jpg";

//Swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Image3,
    title: "Shaurya Sinha",
    subtitle: "Co-founder at Devtown",
    comment:
      "We highly recommend him on based of his interest in the field and his dedication to learning somthing new and the qualities he reflected throughtout the tenure.",
  },
  {
    id: 2,
    image: Image1,
    title: "Rahul Shivlani",
    subtitle: "Summer internship project partner",
    comment:
      "An amazing learner and a team guy. Really rate high on his dedication to learn new things and working hard on it.",
  },
];

const Testimonial = () => {
  return <>
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">Commendation & Reviews</h2>

      <Swiper className="testimonials__container grid"
      modules={[Pagination]}
      spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
      pagination={{ clickable: true }}>
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
              </SwiperSlide>
            )
         })}
      </Swiper>
    </section>
  </>;
};

export default Testimonial;
