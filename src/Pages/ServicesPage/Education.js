import React, {useEffect} from 'react';
import imgMission from "../../Assets/ServicesPage/Снимок экрана 2022-06-11 в 04.26.34.png"
import {css} from "@emotion/css"
import {gsap , ScrollTrigger} from "gsap/all";


const EducationalSection = css`
  width: 100%;
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 4px;
  .Educational_liner {
    height: 4px;
    width: 300px;
    background: #1C345E;
    position: absolute;
    margin-left: 92.5%;
    margin-top: -49.5%;
    z-index: -1;
  }
  .Educational_blue {
    top: 0;
    width: 15%;
    height: 3%;
    left: 0;
    position: absolute;
    background: #1C345E;
    z-index: -1;
  }

  .Educational_img {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    transform: scaleX(0);

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .Educational_block {
    display: flex;
    flex-direction: column;
    opacity: 0;
    padding-top: 3%;
    width: 90%;
    margin-left: 10%;
    & h1 {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 29px;
      margin: 25px 0;
      color: #000;
    }

    & p {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 29px;
      margin: 15px 0;
      width: 100%;
      color: #000;
    }
  }
`

const Educational = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".Educational_liner",{
            x : -1416,
            background: '#1C345E',
            scrollTrigger: {
                trigger :".Educational_liner",
                scrub : true ,
                start : "40% 100%",
                end : "60% 40%",
                toggleActions :'reverse play reverse play',
            },
            delay : 2,
            duration : 2,
        })
        gsap.to(".Educational_blue" ,{
            height : "100%",
            scrollTrigger: {
                trigger : ".Educational_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".Educational_block" ,{
            opacity: 1,
            scrollTrigger: {
                trigger : ".Educational_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".Educational_img" ,{
            scaleX : 1,
            scrollTrigger: {
                trigger : ".Educational_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
    })
    return (
        <div className={EducationalSection} id={"Educational"}>
            <div className={"Educational_liner"}/>
            <div className={"Educational_blue"}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="Educational_img">
                            <img src={imgMission} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="Educational_block">
                            <h1>Образование</h1>
                            <p>В сфере образования , мы акцентируемся на курсах иностранных языков и IT направление в своей деятельности. Наш фонд имеет высококвалифицированные кадры, получивших образования зарубежом.Они нацелены на результат. Один из основных целей наших преподавателей - это за три месяца каждый должен заговорить на английском языке. Также наша компания нацелена расширить свой спектр образовательных услуг, за счет сотрудничества с международными компаниями и их представительствами.
                                Качественное образование - светлое будущее.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Educational;


