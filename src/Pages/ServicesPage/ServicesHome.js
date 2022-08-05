import React, {useEffect} from 'react';
import {css} from "@emotion/css"
import OurServicesSectionImg from "../../Assets/img_2.png"
import {gsap , ScrollTrigger} from "gsap/all";

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
    & a {
      color: white;
      text-decoration: none;
    }
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

const  ServicesHome = ()=>{
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".OurServicesSection_li" ,{
            x: -350,
            scale :1,
            stagger : .3,
            duration : 1,
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
                        <li className={"OurServicesSection_li"}><a href="#Jurisprudence">Юриспруденция</a></li>
                        <li className={"OurServicesSection_li"}><a href="#Educational">Образование</a></li>
                        <li className={"OurServicesSection_li"}><a href="#International">Международная деятельность</a></li>
                        <li className={"OurServicesSection_li"}><a href="#Tourism">Туризм</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ServicesHome;