import React, {useEffect} from 'react';
import imgMission from "../../Assets/ServicesPage/Снимок экрана 2022-06-11 в 04.26.47.png"
import {css} from "@emotion/css"
import {gsap , ScrollTrigger} from "gsap/all";


const InternationalSection = css`
  width: 100%;
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 4px;
  .International_liner {
    height: 4px;
    width: 300px;
    background: #1C345E;
    position: absolute;
    margin-top: -49.5%;
    z-index: -1;
  }

  .International_blue {
    top: 0;
    width: 15%;
    height: 3%;
    right: 0;
    position: absolute;
    background: #1C345E;
    z-index: -1;
  }

  .International_img {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    transform: scaleX(0);
    margin-left: -10%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .International_block {
    display: flex;
    flex-direction: column;
    opacity: 0;
    padding-top: 3%;
    width: 90%;

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

const International = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".International_liner",{
            x : 1224,
            background: '#1C345E',
            scrollTrigger: {
                trigger :".International_liner",
                scrub : true ,
                start : "40% 100%",
                end : "60% 40%",
                toggleActions :'reverse play reverse play',
            },
            delay : 2,
            duration : 2,
        })
        gsap.to(".International_blue" ,{
            height : "100%",
            scrollTrigger: {
                trigger : ".International_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".International_block" ,{
            opacity: 1,
            scrollTrigger: {
                trigger : ".International_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".International_img" ,{
            scaleX : 1,
            scrollTrigger: {
                trigger : ".International_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
    })


    return (
        <div className={InternationalSection} id={"International"}>
            <div className={"International_liner"}/>
            <div className={"International_blue"}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="International_block">
                            <h1>Международная деятельность</h1>
                            <p>В международной деятельности наша компания несмотря на свой возраст, является динамичной развивающиеся организацией. В этой сфере мы нацелены на разностороннее сотрудничество в области образования, представительства, а также визовых вопросах. Качественное оформление необходимых документов, значительно повышающие шансы на получение визы. На сегодняшний день - мы уделяем особое внимание на сотрудничество именно сфере образования, ведь коллаборация с иностранными компаниями даст большой опыт и высококвалифированных кадров. Кроме того, мы нацелены на совместный запуск и создание международных проектов.
                                Сотрудничая с нами - вы будете всегда впереди!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="International_img">
                            <img src={imgMission} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default International;

