import React, {useEffect} from 'react';
import {css} from  "@emotion/css"
import {gsap , ScrollTrigger} from "gsap/all";
import OurCoalSectionImg from "../../Assets/Group 257.png"

const OurCoalSection =css`
    width: 100%;
  position: relative;
  overflow: hidden;
  height: 95vh;
    .OurCoalSection_liner{
      position: absolute;
      width: 65%;
      height: 4px;
      background: #1C345E;
      margin-left: -50%;
    }
    .OurCoalSection_img{
      width: 45%;
      height: 0;
      object-fit: cover;
      position: absolute;
      z-index: -2;
    }
    .OurCoalSection_blue{
      position: absolute;
      margin-left: 45%;
      width: 55%;
      height: 0;
      background: #1C345E;
      z-index: -1;
    }
    .OurCoalSection_block{
      padding-top: 20%;
      .OurCoalSection_block_p {
        overflow: hidden;
        width: 0;
        padding:30px 10px;
        border-left: 1px solid white;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 35px;
        margin: 35px 0;
        opacity: 0;
        color: white;
      }
    }
    .OurCoalSection_title{
      padding-top: 37%;
      & h1 {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 44px;
        margin: 35px 0;
        color: white;
      }
    }
`
const OurCoal = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".OurCoalSection_liner",{
            x : 1368,
            scrollTrigger: {
                trigger :".OurCoalSection_liner",
                scrub : true ,
                start : "60% 85%",
                end : "60% center",
                toggleActions :'reverse play reverse play',
            },
            duration : 2,
        })
    })
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".OurCoalSection_img" ,{
            height : "100%",
            scrollTrigger: {
                trigger : ".OurCoalSection_img",
                start :"45% 40%",
                end:  "bottom 10%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".OurCoalSection_blue" ,{
            height : "100%",
            scrollTrigger: {
                trigger : ".OurCoalSection_img",
                start :"45% 40%",
                end:  "bottom 10%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".OurCoalSection_block_p" ,{
            width : "95%",
            stagger : 0.4,
            opacity :1,
            scrollTrigger: {
                trigger : ".OurCoalSection_block_p",
                start :"65% 90%",
                end:  "bottom 50%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
    })
    return (
        <div className={OurCoalSection}>
            <div className={"OurCoalSection_liner"}/>
            <img src={OurCoalSectionImg} className={"OurCoalSection_img"} alt=""/>
            <div className={"OurCoalSection_blue"}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="OurCoalSection_title">
                            <h1>НАШИ <br/>
                                ЦЕЛИ И ЗАДАЧИ</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="OurCoalSection_block">
                            <p className={"OurCoalSection_block_p"}>Быть флагманом рынка консалтинговых услуг</p>
                            <p className={"OurCoalSection_block_p"}>Выйти на глобальный международный уровень в сфере консалтинга.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCoal;