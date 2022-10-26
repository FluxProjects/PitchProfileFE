import React, { Component } from "react";
import Slider from "react-slick";

const postBlog = [
  {
    image: require("./../../images/testimonials/pic1.jpg"),
    desc: "I never thought a video CV could be so effective and powerful. I always struggled with paper resume e.g. what template to use, how to structure, how to explain. Pitch Profile just made everything simple. I just recorded a short video pitching my skills and experience and uploaded on Pitch Profile.....job done. I was amazed to be contacted by a number of companies and recruiters within days !!",
    name: "Rachel Smith",
    role: "(Project Manager)",
  },
  {
    image: "https://diviultimate.com/wp-content/uploads/2017/01/client-1.jpg",
    desc: "As a Recruiter, our biggest challenge is to go through hundreds of CVs and each CV can be 3-5 pages long. We are always pressed against time and reading CV contents take time. I came across Pitch Profile and it is brilliant. I can view candidate short video profile in 1-2 minute and can make a quick shortlisting decision, it is great !!",
    name: "David Matin",
    role: "(Recruiter)",
  },
  {
    image: require("./../../images/testimonials/pic3.jpg"),
    desc: "It really works !! Just made a quick 2 min video CV explaining what I am good at and what I am looking for. Within days I was contacted by multiple recruiters after viewing my Video Profile and it led to my new job that I am loving it. Thank you Pitch Profile 😊",
    name: "Daria Grove",
    role: "(Marketing Manager)",
  },
];

class owltestimonial extends Component {
  render() {
    var settings = {
      slidesToShow: 1,
      arrows: false,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Slider
        className="blog-carousel-center owl-carousel owl-none "
        {...settings}
      >
        {postBlog.map((item, index) => (
          <div className="item p-3" key={index}>
            <div className="testimonial-5">
              <div className="testimonial-text">
                <p>{item?.desc}</p>
              </div>
              <div className="testimonial-detail clearfix">
                <div className="testimonial-pic radius shadow">
                  <img src={item?.image} width="100" height="100" alt="" />
                </div>
                <strong className="testimonial-name">{item?.name}</strong>
                <span className="testimonial-position">{item?.role}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default owltestimonial;
