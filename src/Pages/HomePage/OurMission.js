import React, {useEffect} from 'react';
import imgMission from "../../Assets/Снимок экрана 2022-06-10 в 21.40.10.png"
import {css} from "@emotion/css"
import {gsap , ScrollTrigger} from "gsap/all";


const OurMissionSection = css`
  width: 100%;
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;

  .OurMission_liner {
    height: 4px;
    width: 300px;
    background: rgba(80, 140, 236, 0.35);
    position: absolute;
    margin-left: 40%;
    margin-top: -95%;
    z-index: -1;
  }

  .OurMission_blue {
    top: 0;
    width: 15%;
    height: 3%;
    position: absolute;
    background: #1C345E;
    z-index: -1;
  }

  .OurMission_img {
    height: 100%;
    width: 65%;
    position: relative;
    overflow: hidden;
    transform: scaleX(0);

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .OurMission_block {
    display: flex;
    flex-direction: column;
    padding-top: 10%;
    width: 80%;
    opacity: 0;

    & h1 {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      margin: 35px 0;
      color: rgba(0, 0, 0, 0.81);
    }

    & p {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 29px;
      margin: 15px 0;
      color: rgba(0, 0, 0, 0.81);
    }
  }
`

const OurMission = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".OurMission_liner",{
            y :330,
            x : -660,
            background: '#1C345E',
            scrollTrigger: {
                trigger :".OurMission_liner",
                scrub : true ,
                start : "60% 40%",
                end : "60% top",
                toggleActions :'reverse play reverse play',
            },
            delay : 2,
            duration : 2,
        })
    })
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".OurMission_blue" ,{
            height : "100%",
            scrollTrigger: {
                trigger : ".OurMission_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".OurMission_block" ,{
            opacity: 1,
            scrollTrigger: {
                trigger : ".OurMission_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".OurMission_img" ,{
            scaleX : 1,
            scrollTrigger: {
                trigger : ".OurMission_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
    })


    return (
        <div className={OurMissionSection} id={"OurMission"}>
            <div className={"OurMission_liner"}/>
            <div className={"OurMission_blue"}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="OurMission_img">
                            <img src={imgMission} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="OurMission_block">
                            <h1>НАША ОСНОВНАЯ МИССИЯ</h1>
                            <p>Больше возможностей для всех. Оф «Глобал Консалтинг Групп» создаёт больше возможностей для людей – как через свои услуги, так и через реализацию проектов и инициатив, затрагивающих важные для общества темы.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;