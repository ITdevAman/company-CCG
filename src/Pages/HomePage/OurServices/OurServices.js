import React, {useEffect} from 'react';
import {css} from "@emotion/css"
import OurServicesSectionImg from "../../../Assets/img_2.png"
import {gsap , ScrollTrigger} from "gsap/all";
import {NavLink} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const OurServicesSection = css`
  width: 100%;
  height: 95vh;
  position: relative;
  overflow: hidden;

  .OurServicesSection_img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .OurServicesSection_block {
    position: relative;
    margin: 0 auto;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-top: 10%;
    &_title {
      margin: 0 auto;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      color: white;
    }
    & ul {
      margin-top: 5%;
    }
  }
  .OurServicesSection_li{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: white;
    margin: 15px 0;
    position: relative;
    padding: 10px 10px;
    left: 400px;
    
    &:before{
      position: absolute;
      content:  "";
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: white;
    }
  }
  .OurServicesSection_btn{
    list-style: none;
    margin-top: 20%;
    margin-left: 66%;
    & a {
      font-weight: 700;
      font-size: 24px;
      color: white;
      text-decoration: none;
      & span{
        color: white;
        font-size: 18px;
      }
    }
  }
`

const OurServices = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".OurServicesSection_li" ,{
            x: -350,
            scale :1,
            stagger : .4,
            scrollTrigger: {
                trigger : ".OurServicesSection_li",
                start :"45% 80%",
                end:  "bottom 50%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".OurServicesSection_block_title", {
            duration: 1,
            opacity :0,
            scale: 2,
            scrollTrigger : {
                trigger : '.OurServicesSection_block_title',
                scrub : true,
                start : "650% 60%",
                end :"center 10%",
                paused: false,
                toggleActions : "restart pause reverse pause"
            }
        })
        gsap.to(".OurServicesSection_btn_span", {
            x: 20,
            duration: .5,
            yoyo : true,
            repeat : -1
        })
    })
    return (
        <div className={OurServicesSection}>
            <img src={OurServicesSectionImg} className={"OurServicesSection_img"} alt=""/>
            <div className="container">
                <div className="OurServicesSection_block">
                    <h1 className={"OurServicesSection_block_title"}>
                        Наши услуги
                    </h1>
                    <ul>
                        <li className={"OurServicesSection_li"}>Юриспруденция</li>
                        <li className={"OurServicesSection_li"}>Образование</li>
                        <li className={"OurServicesSection_li"}>Международная деятельность</li>
                        <li className={"OurServicesSection_li"}>Туризм</li>
                        <li className={"OurServicesSection_btn"}><NavLink to={"/services"}><a>Больше <span><FontAwesomeIcon className="OurServicesSection_btn_span" icon={faArrowRight}/></span></a></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OurServices;