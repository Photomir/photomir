import React from "react";

import kyivstar from "../../assets/images/kyivstar.png";
import viber from "../../assets/images/viber.jpg";
import telegram from "../../assets/images/telegram.jpg";
import vodafone from "../../assets/images/vodafone.png";
import lifecel from "../../assets/images/lifecel.jpg";
import gmail from "../../assets/images/gmail.jpg";
import { StyledContainer, StyledHeader } from "../pages.styled";

export const Contacts = () => {
    return (
        <StyledContainer>
            <StyledHeader>Контакти</StyledHeader>
            <p>Київ:</p>
            <div className="table-container text-center">
                <table className="table-center" cellPadding="5" cellSpacing="15">
                    <tr>
                        <td colSpan={2} className="color-blue">
                            <strong className="bold fs24">м. Льва Толстого</strong> вул.
                            Червоноармійська, 30<small> (Велика Васильківська, 30)</small>
                        </td>
                    </tr>
                    <tr>
                        <td className="color-blue bold text-center">
                            <img src={kyivstar} alt="киевстар" />
                            (096) 644-40-57 <img src={viber} alt="вайбер" />{" "}
                            <img src={telegram} alt="телеграм" />
                            <hr></hr>
                            <img src={vodafone} alt="МТС" />
                            (066) 267-55-97
                            <hr></hr>
                            <img src={lifecel} alt="лайфсел" /> (093) 545-80-62
                            <hr></hr>
                            <img src={gmail} alt="пошта" /> photomir2@gmail.com
                            <hr></hr>
                            Будні дні: 9.00 - 19.00
                        </td>
                        <td className="text-indent">
                            <div className="desktop" id="content">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14373.738554324274!2d30.494134511741233!3d50.44218097818866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d9e263842cfdea!2z0JLQuNCz0L7RgtC-0LLQu9C10L3QvdGPINC60LvRjtGH0ZbQsiB8INCk0L7RgtC-INC90LAg0LTQvtC60YPQvNC10L3RgtC4!5e0!3m2!1suk!2sua!4v1599678183988!5m2!1suk!2sua"
                                    width="400"
                                    height="300"
                                    title="вул. Червоноармійська, 30"
                                    className="border-none"
                                    aria-hidden="false"
                                    tabIndex={0}
                                ></iframe>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <hr className="bg-yellow"></hr>
            <div className="table-container text-center">
                <table className="table-center" cellPadding="5" cellSpacing="15">
                    <tr>
                        <td colSpan={2} className="color-green">
                            <strong className="bold fs24">м. Театральна</strong> вул. Богдана
                            Хмельницького, 3
                        </td>
                    </tr>
                    <tr>
                        <td className="color-green bold text-center">
                            <img src={kyivstar} alt="киевстар" />
                            (096) 644-40-94
                            <hr></hr>
                            <img src={vodafone} alt="МТС" />
                            (066) 267-56-00
                            <hr></hr>
                            <img src={lifecel} alt="лайфсел" /> (093) 345-24-94{" "}
                            <img src={viber} alt="вайбер" /> <img src={telegram} alt="телеграм" />
                            <hr></hr>
                            <img src={gmail} alt="пошта" /> photomir3@gmail.com
                            <hr></hr>
                            Будні дні: 9.00 - 19.00
                            <hr></hr>
                            Субота: 11.00 - 17.00
                        </td>
                        <td className="text-indent">
                            <div className="desktop" id="content">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20324.831383919!2d30.49574651313894!3d50.448477807454616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7379013c3452fd02!2z0JLQuNCz0L7RgtC-0LLQu9C10L3QvdGPINC60LvRjtGH0ZbQsiB8INCk0L7RgtC-INC90LAg0LTQvtC60YPQvNC10L3RgtC4!5e0!3m2!1suk!2sua!4v1599681236667!5m2!1suk!2sua"
                                    width="400"
                                    height="300"
                                    title="вул. Богдана Хмельницького, 3"
                                    className="border-none"
                                    aria-hidden="false"
                                    tabIndex={0}
                                ></iframe>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <hr className="bg-yellow"></hr>
            <div className="table-container text-center">
                <table className="table-center" cellPadding="5" cellSpacing="15">
                    <tr>
                        <td colSpan={2} className="color-red">
                            <strong className="bold fs24">м. Вокзальна</strong> вул. Саксаганського,
                            133
                        </td>
                    </tr>
                    <tr>
                        <td className="color-red bold text-center">
                            <img src={kyivstar} alt="киевстар" />
                            (096) 644-40-71
                            <hr></hr>
                            <img src={vodafone} alt="МТС" />
                            (050) 958-89-08
                            <hr></hr>
                            <img src={lifecel} alt="лайфсел" /> (073) 212-66-92{" "}
                            <img src={viber} alt="вайбер" />
                            <hr></hr>
                            <img src={gmail} alt="пошта" /> photomir4@gmail.com
                            <hr></hr>
                            Будні дні: 9.00 - 19.00
                            <hr></hr>
                            Субота: 11.00 - 17.00
                        </td>
                        <td className="text-indent">
                            <div className="desktop" id="content">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10163.770577717301!2d30.494990771249114!3d50.442168987771346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9a9b8f431849733!2z0JLQuNCz0L7RgtC-0LLQu9C10L3QvdGPINC60LvRjtGH0ZbQsiB8INCk0L7RgtC-INC90LAg0LTQvtC60YPQvNC10L3RgtC4!5e0!3m2!1suk!2sua!4v1599681300777!5m2!1suk!2sua"
                                    width="400"
                                    height="300"
                                    title="вул. Саксаганського, 133"
                                    className="border-none"
                                    aria-hidden="false"
                                    tabIndex={0}
                                ></iframe>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <hr className="bg-yellow"></hr>
            <p className="text-center">
                Відправка транспортною компанією "Нова пошта"{" "}
                <span className="color-red">+ 30</span> грн.
            </p>
            <p className="text-center">
                Можлива оплата на карту Приватбанку, Монобанку або розрахунковий рахунок.
            </p>
        </StyledContainer>
    );
};
