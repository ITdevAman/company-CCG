import React, {useEffect} from 'react';
import imgMission from "../../Assets/ServicesPage/Снимок экрана 2022-06-11 в 04.26.18.png"
import {css} from "@emotion/css"
import {gsap , ScrollTrigger} from "gsap/all";


const JurisprudenceSection = css`
  width: 100%;
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 4px;

  .Jurisprudence_blue {
    top: 0;
    width: 15%;
    height: 3%;
    right: 0;
    position: absolute;
    background: #1C345E;
    z-index: -1;
  }

  .Jurisprudence_img {
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

  .Jurisprudence_block {
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

const Jurisprudence = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".Jurisprudence_blue" ,{
            height : "100%",
            scrollTrigger: {
                trigger : ".Jurisprudence_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".Jurisprudence_block" ,{
            opacity: 1,
            scrollTrigger: {
                trigger : ".Jurisprudence_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
        gsap.to(".Jurisprudence_img" ,{
            scaleX : 1,
            scrollTrigger: {
                trigger : ".Jurisprudence_blue",
                start :"45% 40%",
                end:  "bottom 20%",
                scrub: true ,
                toggleActions :'reverse play reverse play'
            },
            duration : 2,
        })
    })


    return (
        <div className={JurisprudenceSection} id={"Jurisprudence"}>
            <div className={"Jurisprudence_blue"}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="Jurisprudence_block">
                        <h1>Юриспруденция</h1>
                        <p>
                            Наша компания ОФ "Глобал Консалтинг Групп" имеет широкий спектр юридических услуг, в сфере юриспруденции - полностью охватываем все основные области, требуемые от юридической профессии для частных клиентов. Конкретно - мы занимаемся регистрацией "ОО" ; "ОсОО"; "ОФ"; "ОсДО"; "Учреждение"; "Ассоциации"; "Союзы"; "ТСЖ"; "КХФ". Консультирование в получении лицензий: в образовательной и строительной деятельности. Составление и анализ договоров. Юридическое сопровождение бизнеса. Для нашего уязвимого слоя населения юридическая помощь, юридические услуги оказывается совершенно бесплатно с консультацией и сопровождением.</p>
                    </div>
                </div>
                    <div className="col-lg-4">
                        <div className="Jurisprudence_img">
                            <img src={imgMission} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Jurisprudence;