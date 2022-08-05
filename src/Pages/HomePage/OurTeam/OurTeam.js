import React, {useEffect} from 'react';
import {css} from "@emotion/css";
import Slider from "react-slick";
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
  .ourTeamSectionTitle{
    transform: scale(1);
    opacity: 1;
  }
`
const OurTeamCart = css`
  margin-left: -150px;
  width: 100%;
  height: auto;
  margin-bottom: 60px;
  top: 0;
  .OurTeamCart{
    margin-top: -80px;
    margin-bottom: 80px;
    width: 85%;
    height: 400px;
    position: relative;
    background: transparent;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    &:hover .OurTeamCartBlock{
      transform: translateY(-40px);
    }
    & img {
      transition: .4s;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      z-index: -1;
      border-radius: 15px;
    }
    .OurTeamCartBlock{
      transition: .3s;
      position: absolute;
      margin-top: 115%;
      margin-left: 15%;
      z-index: 4;
      width: 70%;
      padding: 15px 20px 5px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: #FFFFFF;
      border-radius: 7px;
      & h1 {
        font-family: 'Montserrat' , sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 20px;
        color: #000000;
      }
      & p {
        font-family: 'Montserrat' , sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.78);
      }
    }
  }
`
const ourTeamSection = css`
    width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`
const OurTeam = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoPlay : true,
    };
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".ourTeamSection_block", {
            duration: 1,
            y : -200,
            scrollTrigger : {
                trigger : '.OurTeamCart',
                scrub : true,
                start : "20% bottom",
                end :"20% 65%",
                // markers: true,
                paused: false,
                toggleActions : "restart pause reverse pause"
            }
        })
        gsap.to(".OurTeamCart", {
            duration: 4,
            stagger: .8,
            scaleY : 1,
            y : 100,
            scrollTrigger : {
                trigger : '.OurTeamCart',
                scrub : true,
                start : "80% bottom",
                end :"20% 45%",
                paused: false,
                toggleActions : "restart pause reverse pause"
            }
        })
    })
    return (
        <div className={ourTeamSection}>
            <div className="ourTeamSection_block">
                <div className={Title}>
                    <h1 className={"ourTeamSectionTitle"}>Наша Команда</h1>
                </div>
                <div>
                    <Slider {...settings}>
                        {
                            Data.map((item)=> {
                                return (
                                    <div className={OurTeamCart}>
                                        <div className={"OurTeamCart"}>
                                            <img src={item.img} alt=""/>
                                            <div className={"OurTeamCartBlock"}>
                                                <h1>{item.name}</h1>
                                                <p>{item.position}</p>
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

export default OurTeam;