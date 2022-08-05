import React, {useEffect} from 'react';
import {css} from "@emotion/css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp, faCheck, faQuestion} from "@fortawesome/free-solid-svg-icons";
import {gsap ,ScrollTrigger } from "gsap/all";

const Title = css`
  margin-top: 25%;
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  & h1 {
    opacity: 1;
    margin-bottom: 80px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 59px;
    color: #000000;
  }
`
const AboutCompanyCart = css`
  height: 330px;
  margin: 0 auto;
  width: 90%;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: #FFFFFF;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  & h1 {
    font-family: 'Montserrat' , sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
margin: 15px 0;
    color: rgba(0, 0, 0, 0.81);
  }
  & p {
    font-family: 'Montserrat' , sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;

    color: rgba(0, 0, 0, 0.5);
  }
  .AboutCompanyCart_Icon{
    width: 80px;
    height: 80px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #055EA7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 0px 4px rgba(0, 0, 0, 0.25), inset 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    &_icon {
      color: #055EA7;
      width: 20px;
      height: 20px;
      padding: 10px;
      background: white;
      border-radius: 50%;
    }
  }
`
const AboutCompanyCartCenter = css`
  height: 320px;
  margin: 0 auto;
  width: 90%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: #FFFFFF;
  box-shadow: 8px 0px 4px rgba(5, 94, 167, 0.16), 0px 8px 4px rgba(0, 88, 220, 0.32);
  border-radius: 15px;
  transform: scale(1.05);

  & h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin: 15px 0;
    color: rgba(0, 0, 0, 0.81);
  }

  & p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;

    color: rgba(0, 0, 0, 0.5);
  }

  .AboutCompanyCart_Icon {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #055EA7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 0px 4px rgba(0, 0, 0, 0.25), inset 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;

    &_icon {
      color: #055EA7;
      width: 20px;
      height: 20px;
      padding: 10px;
      background: white;
      border-radius: 50%;
    }
  }
`

const AboutCompany = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger )
        gsap.to(".aboutCompany", {
            duration: 2,
            y : -300,
            scrollTrigger : {
                trigger : '.aboutCompany',
                start : "start 100%",
                scrub : true ,
                end :"center 50%",
                toggleActions : "restart play reverse play"
            }
        })
        gsap.to(".aboutCompanyTitle", {
            duration: .6,
            opacity :0,
            scale: 2,
            scrollTrigger : {
                trigger : '.aboutCompanyTitle',
                // markers : true,
                scrub : true,
                start : "650% 100%",
                end :"center 40%",
                toggleActions : "restart pause reverse pause"
            }
        })
    })

    return (
        <div className={'aboutCompany'}>
            <div className="container">
                <div className={Title}>
                    <h1 className={"aboutCompanyTitle"}>О Компании</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className={AboutCompanyCart}>
                            <div className="AboutCompanyCart_Icon">
                                <FontAwesomeIcon className="AboutCompanyCart_Icon_icon" icon={faQuestion}/>
                            </div>
                            <h1>
                                Кто Мы
                            </h1>
                            <p>
                                Глобал Консалтинг Групп – это динамично развивающая компания, специализирующая в области образования, туризма, бухгалтерии и т.д.
                                Наша команда включает специалистов самой разной направленности – от юристов до маркетинга. И нам очень хочется стать полезными для Вашего бизнеса, помочь его развитию.
                                Мы всегда готовы оказать Вам профессиональную поддержку во всем, что касается образовательных услуг, юридических услуг, туризма и маркетинга.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={AboutCompanyCartCenter}>
                            <div className="AboutCompanyCart_Icon">
                                <FontAwesomeIcon className="AboutCompanyCart_Icon_icon" icon={faArrowUp}/>
                            </div>
                            <h1>
                                Наша Миссия
                            </h1>
                            <p>
                                Обучать молодежь, используя индивидуальный подход к каждому и уделяя особое внимание даже мелким деталям; предоставлять спектр консалтинговых услуг физическим и юридическим лицам в КР и за границей на высочайшем уровне, постоянно повышая уровень качества предоставляемых консалтинговых услуг. Тем самым способствуя развитию рыночных отношений и человеческой кооперации в КР и мире.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={AboutCompanyCart}>
                            <div className="AboutCompanyCart_Icon">
                                <FontAwesomeIcon className="AboutCompanyCart_Icon_icon" icon={faCheck}/>
                            </div>
                            <h1>
                                Наши Отличия
                            </h1>
                            <p>Основным отличием нашей компании является его команда. В команде работают профессионалы своего дела, которые являются знатоками своих профессий.   </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;