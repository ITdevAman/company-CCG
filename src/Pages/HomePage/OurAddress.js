import React, {useEffect} from 'react';
import {css} from "@emotion/css";
import {faKaaba, faLocationDot, faPhone, faTelevision} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-bootstrap";
import {gsap, ScrollTrigger} from "gsap/all";
import logo from "../../Assets/Logo/Дизайн_без_названия__2_-removebg 1.png"

const Title = css`
  margin-top: 14%;
  display: flex;
  width: 100%;
  position: relative;
  justify-content: start;
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
`
const OurAddressSection = css`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  background: rgba(5, 94, 167, 0.07);
  padding: 4% 0 ;
`
const OurGoogleMap = css`
  width: 98%;
  height: 482px;
  position: relative;
`
const OurAddressBlock = css`
  display: flex;
  flex-direction: column;
  align-items: center;
    .name{
      margin-top: 15%;
      display: flex;
      &_icon{
        color: #055EA7;
        font-size: 22px;
        margin: 0 20px;
      }
    }
  .OurAddressLogo{
    width: 30%;
    position: relative;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
  }
  .name_link{
    margin-top: 2%;
    & a{
      & p{
        font-family: 'Montserrat',sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 10px;
        color: #055EA7;
        margin-left: -2%;
      }
    }
    & p{
      font-family: 'Montserrat',sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 10px;
      color: #055EA7;
      margin-left: 10.5%;
    }
  }
  .name_phone{
    position: relative;
    display: flex;
    align-items: center;
    margin: 4% 0;
    &_icon{
      color: #055EA7;
      font-size: 20px;
      margin-left: 4%;
    }
    &_block{
      & a {
        font-family: 'Montserrat' , sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 10px;
        color: #055EA7;
      }
    }
  }
  .name_set{
    display: flex;
    align-items: center;
    margin-left: 8%;
    & a{
      .name_icons{
        color: #055EA7;
        font-size: 22px;
        
      }
    }
  }
`
const address = css`
    .address{
      margin-bottom: -230px;
    }
`
const OurAddress = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".address", {
            duration: 1,
            y : -250,
            scrollTrigger : {
                trigger : '.address',
                scrub : true,
                start : "20% bottom",
                end :"20% 45%",
                paused: false,
                toggleActions : "restart pause reverse pause"
            }
        })
    })
    return (
        <div className={address}>
            <div className={"address"}>
                <div className="container">
                    <div className={Title}>
                        <h1>Наш Адрес</h1>
                    </div>
                </div>
                <div className={OurAddressSection}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={OurGoogleMap}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.1923659544004!2d74.56253199186487!3d42.864941730798826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec845e7a21b23%3A0x876d54f8decf0dbf!2sRaev!5e0!3m2!1sru!2skg!4v1654375829801!5m2!1sru!2skg"
                                        width="100%" height="100%" allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={OurAddressBlock}>
                                    <div className={"OurAddressLogo"}>
                                        <img src={logo} alt=""/>
                                    </div>
                                    <div className="name_link">
                                        <NavLink href={"https://goo.gl/maps/KQWpg4WTDu4U8kH56"}>
                                            <p><FontAwesomeIcon className="name_icon" icon={faLocationDot}/>Адрес: Кыргызская Республика, г.Бишкек, ул. Л.Толстой 35/1</p>
                                        </NavLink>
                                        <p>ПН-СУБ 10.00 до 18.00</p>
                                        <div className="name_phone">
                                            <FontAwesomeIcon className="name_phone_icon" icon={faPhone}/>
                                            <div className="name_phone_block">
                                                <NavLink href={"tel:+996 703 063 535"}>+996 703 063 535</NavLink>
                                                <NavLink href={"tel:+996 550 063 535"}>+996 550 063 535</NavLink>
                                            </div>
                                        </div>
                                        <div className={"name_set"}>
                                            <NavLink href={"https://instagram.com"}>
                                                <FontAwesomeIcon className="name_icons" icon={faKaaba}/>
                                            </NavLink>
                                            <NavLink href={"https://telegram.com"}>
                                                <FontAwesomeIcon className="name_icons" icon={faKaaba}/>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAddress;