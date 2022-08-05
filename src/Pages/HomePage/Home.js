import React ,{useEffect} from 'react';
import {css} from "@emotion/css"
import {NavLink} from "react-router-dom";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";
const homeTitle = css`
  padding-top: 19%;
  .block {
    overflow: hidden;
    position: relative;
    height: 40vh;
    & h3 {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 15px;
      color: white;
      margin-top: 100px;
      margin-bottom: -80px;
      opacity: 0;
    }
    & p {
      width: 87%;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 350;
      font-size: 16px;
      line-height: 20px;
      color: white;
      opacity: 0;
      margin-bottom: -30px;
    }
  }
  

  & div {
    position: relative;
    overflow: hidden;
    height: 100px;
    padding: 10px;
    margin-left: -10px;
    & a{
      & button {
        transform: translateY(-100px);
        font-weight: 600;
        line-height: 17px;
        color: #FFFFFF;
        font-family: 'Montserrat', sans-serif;
        background: #055EA7;
        box-shadow: 8px 2px 8px rgba(0, 0, 0, 0.15), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        border: none;
        padding: 14px 40px;
        transition: .3s;
        &:hover{
          box-shadow: 0 0 10px #055EA7;
        }
      }
    }
  }
  .titleAni{
    width: 90%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 54px;
    line-height: 59px;
    margin-top: 90px;
    opacity: 0;
    color: transparent;
    -webkit-text-stroke: 1px  white;
  }
`
const home = css`
    position: relative;
    width: 100vw;
    height: 84vh;
  overflow: hidden;
  .imgHome{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const lineBlock = css`
  width: 5vw;
  height: 108vh;
  position: relative;
  overflow: hidden;
  transform: rotate(45deg);
  margin-left: 31.2%;
  margin-top: -14%;
  .lineBlock_span{
    box-shadow:0 0 2px yellow;
    top: 0;
    width: 2.5px;
    height: 100px;
    background: #CDDB77;
    margin: 20px;
  }
`
const Home = () =>{
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger )
        gsap.to(".imgHome", {
            duration : 1,
            scale : 2,
            scrollTrigger : {
                trigger : '.imgHome',
                start : "bottom 40%",
                scrub : true ,
                end :"bottom 10%",
                toggleActions : "restart play reverse play"
            }
        })
        gsap.to('.titleAni',{
            duration : 1 ,
            y: -80,
            ease: "power1.inOut",
            opacity : 1,
            stagger: {
                each: 1,
                from: "start",
                amount: .7
            },
            delay : 1
        })
    })
    useEffect(()=>{
        gsap.to('.titleDesc1',{
            duration : 1 ,
            y: -80,
            ease: "power1.inOut",
            opacity : 1,
            delay : 1
        })
    })
    useEffect(()=>{
        gsap.to('.titleDesc2',{
            duration : 1 ,
            y: -80,
            ease: "power1.inOut",
            opacity : 1,
            delay : 1.6
        })
    })
    useEffect(()=>{
        gsap.to('.titleBtn',{
            duration : 1 ,
            y: 0,
            ease: "power1.inOut",
            opacity : 1,
            delay : 2
        })
    })
    useEffect(()=>{
        gsap.to('.lineBlock_span',{
            duration : 1 ,
            y : 600,
            repeat : 2,
            yoyo : 'true',
            stagger : {
                each : .1,
                from: "random",
            },
            ease: "power1.inOut",
        })
        gsap.to(".animed" , {
            color: "white",
            duration : 1,
            stagger : {
                each : .5,
                from  : 'random',
            },
            yoyo : true,
            repeat : -1
        })

    })

    return (
        <div className={home}>
            <img src="https://www.tricentis.com/wp-content/uploads/2021/09/ConsultingservicesHero-1-scaled.jpg" className={"imgHome"} alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className={homeTitle}>
                            <div className={"block"}>
                                <h3 className="titleDesc1">ОФ “Global Consulting Group”</h3>
                                <h1 className={"titleAni"}><span className='titleAni animed'>Новое дыхание</span><br/>
                                    <span className='titleAni animed'>Новый формат</span><br/>
                                    <span className='titleAni animed'>Новое направление</span> </h1>
                                <p className="titleDesc2">Общественный фонд Global Consulting Group – отличная возможность для детей и
                                    молодежи.</p>
                            </div>
                            <div>
                                <NavLink to={"#"}><button className={"titleBtn"}>Консультация</button></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={lineBlock}>
                            <div className={"lineBlock_span"}/>
                            <div className={"lineBlock_span"}/>
                            <div className={"lineBlock_span"}/>
                            <div className={"lineBlock_span"}/>
                            <div className={"lineBlock_span"}/>
                            <div className={"lineBlock_span"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;