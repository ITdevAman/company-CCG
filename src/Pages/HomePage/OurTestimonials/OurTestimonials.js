import React, {useEffect} from 'react';
import {css} from "@emotion/css";
import Slider from "react-slick"
import Data from "./Data";
import {gsap, ScrollTrigger} from "gsap/all";

const Title = css`
  margin-top: 14%;
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;

  & h1 {
    margin-bottom: 80px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 59px;
    color: #000000;
  }
`
const OurTestimonialsSection = css`
  width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
`
const OurTestimonial = css`
  height: auto;
  margin-bottom: 60px;
  margin-left: 50%;
  .OurTestimonial {
    width: 95%;
    height: 300px;
    position: relative;
    overflow: hidden;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    margin-left: 250px;
    &_img {
      width: 45%;
      position: relative;
      overflow: hidden;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &_title {
      width: 55%;
      z-index: 3;
      display: flex;
      justify-content: center;
      &_desc {
        width: 60%;
        position: absolute;
        padding: 10px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin-top: 25%;
        z-index: 4;
        margin-left: -8%;
        background: white;
        & p {
          font-family: 'Montserrat',sans-serif;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
        }
      }
      & h1 {
        font-family: 'Montserrat' , sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        margin-top: 105%;
      }
    }
  }
`
const OurTestimonials = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true,
    };

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".OurTestimonialsSection_block", {
            duration: 1,
            y : -200,
            scrollTrigger : {
                trigger : '.OurTestimonialsSection_block',
                scrub : true,
                start : "20% bottom",
                end :"20% 75%",
                paused: false,
                toggleActions : "restart pause reverse pause"
            }
        })
        gsap.to(".OurTestimonial", {
            duration: 3,
            stagger: .7,
            x : -230,
            scrollTrigger : {
                trigger : '.OurTestimonial',
                scrub : true,
                start : "60% bottom",
                end :"20% 55%",
                paused: false,
                toggleActions : "restart pause reverse pause"
            }
        })

    })
    return (
        <div className={OurTestimonialsSection}>
            <div className="OurTestimonialsSection_block">
                <div className={Title}>
                    <h1 className={"OurTestimonialsSection_title"}>
                        Наши Отзывы
                    </h1>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            Data.map((item) => {
                                return (
                                    <div className={OurTestimonial}>
                                        <div className="OurTestimonial">
                                            <div className="OurTestimonial_img">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className="OurTestimonial_title">
                                                <div className="OurTestimonial_title_desc">
                                                    <p>{item.testimonial}</p><span>.....</span>
                                                </div>
                                                <h1>{item.name}</h1>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default OurTestimonials;