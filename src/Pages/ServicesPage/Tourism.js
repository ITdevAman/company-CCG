import React, {useEffect} from 'react';
import imgMission from "../../Assets/ServicesPage/Снимок экрана 2022-06-11 в 04.27.05.png"
import {css} from "@emotion/css"
import {gsap , ScrollTrigger} from "gsap/all";


const TourismSection = css`
  width: 100%;
  position: relative;
  padding-top: 4px;
  height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  .Tourism_liner {
    height: 4px;
    width: 300px;
    background: #1C345E;
    position: absolute;
    margin-left: 92.5%;
    margin-top: -49.5%;
    z-index: -1;
  }
  .Tourism_blue {
    top: 0;
    width: 15%;
    height: 3%;
    left: 0;
    position: absolute;
    background: #1C345E;
    z-index: -1;
  }

  .Tourism_img {
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

  .Tourism_block {
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

const Tourism = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".Tourism_liner",{
            x : -1416,
            background: '#1C345E',
            scrollTrigger: {
                trigger :".Tourism_liner",
                scrub : true ,
                start : "40% 100%",
                end : "60% 40%",
                toggleActions :'reverse play reverse play',
            },
            delay : 2,
            duration : 2,
        })
        gsap.to(".Tourism_blue" ,{
            height : "100%",
            scrollTrigger: {
                trigger : ".Tourism_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".Tourism_block" ,{
            opacity: 1,
            scrollTrigger: {
                trigger : ".Tourism_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".Tourism_img" ,{
            scaleX : 1,
            scrollTrigger: {
                trigger : ".Tourism_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
    })
    return (
        <div className={TourismSection} id={"Tourism"}>
            <div className={"Tourism_liner"}/>
            <div className={"Tourism_blue"}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="Tourism_img">
                            <img src={imgMission} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="Tourism_block">
                            <h1>Туризм</h1>
                            <p>Наши специалисты в сфере туризма, активно работают уже 3 года и имеют большой опыт и знания в этой деятельности. На данный момент в наши услуги входят:
                                Составление туристических маршрутов и локаций по всему Кыргызстану
                                Организация походов, кэмпингов и лагерей разного рода Встреча и сопровождение туристов из зарубежных стран. Услуги гида и каршеринга
                                Аренда экипировок и снаряжений для различного вида отдыха
                                В области туризма, наша компания полностью соответствует по стандартам сервиса и безопасности.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tourism;


