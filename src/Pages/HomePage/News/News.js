import React, {useEffect} from 'react';
import {css} from "@emotion/css";
import {NavLink} from "react-router-dom";
import Data from "./Data";
import {gsap , ScrollTrigger} from "gsap/all";

const Title = css`
  margin-top: 14%;
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-between;
  align-items: center;
  & h1 {
    margin-bottom: 80px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 59px;
    color: #000000;
  }
  & a {
    font-family: 'Montserrat' ;
    padding: 10px 30px;
    font-style: normal;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    background: #055EA7;
    box-shadow: 8px 2px 8px rgba(0, 0, 0, 0.15), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
  }
`
const newBlock = css`
  .newBlock{
    background: #FFFFFF;
    box-shadow: 5px 5px 5px rgba(5, 94, 167, 0.16);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    width: 90%;
    margin-top: 120px;
    transform: scaleY(.3);
    .newBlockImg{
      width: 100%;
      height: 282px;
      position: relative;
      overflow: hidden;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .newBlockTitles{
      width: 100%;
      position: relative;
      height: 320px;
      padding: 40px;
      & h1 {
        font-family: 'Roboto' ,sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.1em;
        color: #000000;
        flex: none;
        order: 0;
        flex-grow: 0;
      }
      & p {

        font-family: 'Roboto' , sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.1em;
        color: #000000;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
      }
      & a {
        & button {
          margin-top: 4%;
          font-family: 'Montserrat' , sans-serif;
          font-weight: 500;
          font-size: 14px;
          text-align: center;
          color: #055EA7;
          background: #FFFFFF;
          transition: .4s;
          border: 1px solid #055EA7;
          border-radius: 7px;
          width: 100%;
          padding: 4px 0;
          &:hover {
            background: #055EA7;
            color: white;
          }
        }
      }
    }
  }
`

const News = ({slice}) => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".newBlock", {
            duration: 1,
            stagger : {
                each : .6,
                from:'center'
            },
            ease : "easeIn",
            scaleY : 1,
            y : -100,
            scrollTrigger : {
                trigger : '.newBlock',
                scrub : true,
                start : "20% bottom",
                end :"20% 75%",
                paused: false,
                toggleActions : "restart pause reverse pause"
            }
        })
    })
    return (
        <section id={"News"}>
            <div className="container">
                <div className={Title}>
                    <h1 className={"News_block_title"}>Последние  Новости</h1>
                    <NavLink to={"/news"}>Смотреть еще</NavLink>
                </div>
                <div className="row">
                    {
                        Data.slice(0, slice).map((item)=>{
                            return (
                                <div className="col-lg-4">
                                    <div className={newBlock}>
                                        <div className="newBlock">
                                            <div className={"newBlockImg"}>
                                                <img src={item.newsImg} alt=""/>
                                            </div>
                                            <div className="newBlockTitles">
                                                <h1>{item.newsName}</h1>
                                                <p>{item.newsDesc}</p>
                                                <NavLink to={"/news"}><button>Подробнее</button></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default News;