import React from 'react';
import {css} from "@emotion/css"
import {NavLink} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKaaba} from "@fortawesome/free-solid-svg-icons";
const FooterSection =css`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  background: #055EA7;
  padding: 4% 0 ;
`
const FooterTitle =css`
  font-family: 'Spectral' ,sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
`
const FooterDesc = css`
  font-family: 'Spectral' , sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.49);
  
`
const name_set = css`
  display: flex;
  align-items: center;
  & a{
    margin-left: -2%;
    .name_icon{
      color: rgba(255, 255, 255, 0.49);
      font-size: 24px;
    }
  }
`
const hr = css`
  width: 100%;
  background: white;
  height: 2px;
  margin-top: 5%;
`
const FooterEnd =css`
    display: flex;
  justify-content: center;
  margin-top: 1%;
  margin-bottom: -4%;
  & p {
    font-family: 'Spectral' , sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.49);
  }
`
const Footer = () => {
    return (
        <div className={FooterSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h1 className={FooterTitle}>Есть вопросы? Позвоните нам </h1>
                        <p className={FooterDesc}>+996 771 37 65 58</p>
                        <p className={FooterDesc}>+996 706 42 52 78</p>
                    </div>
                    <div className="col-lg-4">
                        <h1 className={FooterTitle}>Условия и политика</h1>
                        <p className={FooterDesc}>Политика конфиденциальности</p>
                        <p className={FooterDesc}>Условия эксплуатации</p>
                        <p className={FooterDesc}>Условия участия в программе Expedia Rewards</p>
                        <p className={FooterDesc}>Доступность</p>
                        <p className={FooterDesc}>Не продавайте мою личную информацию</p>
                    </div>
                    <div className="col-lg-4">
                        <h1 className={FooterTitle}>Социальные сети</h1>
                        <div className={name_set}>
                            <NavLink href={"https://instagram.com"}>
                                <FontAwesomeIcon className="name_icon" icon={faKaaba}/>
                            </NavLink>
                            <NavLink href={"https://telegram.com"}>
                                <FontAwesomeIcon className="name_icon" icon={faKaaba}/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className={hr}/>
            <div className="container">
                <div className={FooterEnd}>
                    <p>© 2021 Optimum, Inc., компания Optimum. Все права защищены. </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;