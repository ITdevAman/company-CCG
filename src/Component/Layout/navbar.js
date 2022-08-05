import React, {useEffect, useState} from 'react';
import {css} from "@emotion/css"
import logo from "../../Assets/Logo/Дизайн_без_названия__2_-removebg 1.png"
import {gsap} from "gsap";
import {NavLink} from "react-router-dom";
import Axios from "axios";

const menu = css`
  ul li {
    list-style: none;
  }
    display: flex;
  align-items: center;
  .menu{
    &_logo{
      width: 87px;
      height: 89px;
      position: relative;
      overflow: hidden;
      margin-left:4%;
      top: -105px;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &_navbar{
      margin-left: 20%;
      & ul {
        display: flex;
        padding-top: 10px;
        align-items: center;
        .menu_navbar_link{
          font-family: 'Montserrat' , sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          transition: .3s;
          position: relative;
          margin: 0 15px;
          top: -105px;
          opacity: 0;
          & a {
            color:  #0139A9;
            text-decoration: none;
          }
          &:before{
            position: absolute;
            content: "";
            width: 90%;
            height: 2px;
            background:  #0139A9;
            left: 7%;
            bottom: -1px;
            transform: scaleX(0);
            transition: .3s;
          }
          &:hover:before{
            transform: scaleX(1);
          }
        }
      }
    }
  }
`
const navbar = css`
    width: 100%;
    position: relative;
  padding: 5px 0;
    background: white;
`


const Navbar = () => {

    const [info , setInfo] = useState([])
    console.log(info)
    const url = 'http://162.19.158.34/api/'
    const Token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU1Mzc4NzI0LCJpYXQiOjE2NTUyOTIzMjQsImp0aSI6Ijc3Yzk3OGI4OTdjZDQxZTU4NjBiOTNmZGI0OTBjNDAzIiwidXNlcl9pZCI6NH0.STxoSs8J1NscC2RUJVZ8Cobkr0QblYUCRzn61PYVQjo"
    // const Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU1Mzc4NzI0LCJpYXQiOjE2NTUyOTIzMjQsImp0aSI6Ijc3Yzk3OGI4OTdjZDQxZTU4NjBiOTNmZGI0OTBjNDAzIiwidXNlcl9pZCI6NH0.STxoSs8J1NscC2RUJVZ8Cobkr0QblYUCRzn61PYVQjo'
    const authAxios = Axios.create({
        baseURL : url,
        headers : {
            authorization : `Bearer ${Token}`
        }
    })
    useEffect(()=> {
        authAxios.get("/cash-session/info/")
            .then((res)=> {
                console.log(res.data)
            })
            .catch(err=>console.log(err.message))
    },[])



    useEffect(()=>{
        gsap.to(".menu_navbar_link", {
            duration : 1,
            y : 110,
            opacity: 1,
            color: '#0139A9',
            stagger : {
                each : .3,
                from : "random",
            }
        })
    })
    useEffect(()=>{
        gsap.to(".menu_logo", {
            duration : 1,
            y : "107",
        })
    })
    // const text = "amansoft"
    // const [qr , setQR] = useState("")
    // useEffect(()=>{
    //     QRCode.toDataURL(text).then(setQR)
    // })

    return (
        <section className={navbar}>
            <div className="container">
                <div className={menu}>
                    <div className="menu_logo">
                        <img src={logo} alt=""/>
                    </div>
                    <nav className={"menu_navbar"}>
                        <ul>
                            <li className={"menu_navbar_link"}><NavLink to={"/"} className="menu_navbar_link_a">Главная</NavLink></li>
                            <li className={"menu_navbar_link"}><NavLink to={"/"} className="menu_navbar_link_a">О компании</NavLink></li>
                            <li className={"menu_navbar_link"}><NavLink to={"/services"} className="menu_navbar_link_a">Услуги</NavLink></li>
                            <li className={"menu_navbar_link"}><NavLink to={"/"} className="menu_navbar_link_a">Документы</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Navbar;