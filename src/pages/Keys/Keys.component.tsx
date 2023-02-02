import React from "react";
import {
    StyledContainer,
    StyledHeader,
    StyledImgRight,
    StyledParagraph,
    StyledParagraphRed,
    StyledPrice,
} from "../pages.styled";
import keys1 from "../../assets/images/keys1.jpg";
import keys2 from "../../assets/images/keys2.jpg";
import keys3 from "../../assets/images/keys3.jpg";
import keys4 from "../../assets/images/keys4.jpg";
import keys5 from "../../assets/images/keys5.jpg";
import keys6 from "../../assets/images/keys6.jpg";
import keys7 from "../../assets/images/keys7.jpg";
import keys8 from "../../assets/images/keys8.jpg";
import keys9 from "../../assets/images/keys9.jpg";
import keys10 from "../../assets/images/keys10.jpg";
import keys11 from "../../assets/images/keys11.jpg";
import keys12 from "../../assets/images/keys12.jpg";
import brelok from "../../assets/images/brelok.jpg";

export const Keys = () => {
    return (
        <StyledContainer>
            <StyledHeader>Виготовлення ключів</StyledHeader>
            <StyledImgRight alt="дублювання ключів" src={keys1} />
            <StyledParagraph>
                Це один з основних видів діяльності нашої компанії. У наших майстернях представлені
                близько 1500 найменувань заготовок поширених і рідкісних ключів.
            </StyledParagraph>
            <p>
                Ми оперативно і професійно надаємо послуги з виготовлення ключів будь-якого виду і
                ступеня складності, зокрема:
            </p>
            <p>
                - виготовлення <strong>англійських (квартирних)</strong> ключів - від{" "}
                <StyledPrice>70</StyledPrice> грн.,
            </p>
            <p>
                <img alt="копія ключів" src={keys2} />
            </p>
            <p>
                - виготовлення ключів <strong>фінського</strong> типу - від{" "}
                <StyledPrice>70</StyledPrice> грн.,
            </p>
            <p>
                <img alt="зробити ключ" src={keys3} />
            </p>
            <p>
                - <strong>електронні</strong> ключі{" "}
                <strong>до домофону, безконтактні брелки, браслети</strong> і
                <strong>карти доступу</strong> - від <StyledPrice>100</StyledPrice>
                грн.,
            </p>
            <p>
                <img alt="електронні ключі до домофону" src={keys4} />
            </p>
            <p>
                - виготовлення <strong>перфорованих</strong> ключів
                <strong>з профілем горизонтального розташування</strong> (або як їх ще в народі
                називають <strong>лазерні</strong> ключі) - від
                <StyledPrice>110</StyledPrice> грн.,
            </p>{" "}
            <p>
                <img alt="виготовлення ключів" src={keys5} />
            </p>
            <p>
                - виготовлення <strong>хрестоподібних</strong> ключів - від{" "}
                <StyledPrice>100</StyledPrice> грн.,
            </p>
            <p>
                <img alt="хрестоподібні ключі" src={keys6} />
            </p>
            <p>
                - виготовлення<strong> одно-</strong> та <strong>двобородкових</strong> ключів - від{" "}
                <StyledPrice>120</StyledPrice> грн.,
            </p>
            <p>
                <img alt="ключі в Києві" src={keys7} />
            </p>
            <p>
                - виготовлення <strong>автомобільних</strong> ключів - від
                <StyledPrice> 120 </StyledPrice>грн.
            </p>
            <p>
                <img alt="автомобільні ключі" src={keys8} />
            </p>
            <p>
                - виготовлення <strong>ригельних (рейкових)</strong> ключів{" "}
                <small>
                    (тільки за адресою <a href="/contacts">вул. Червоноармійська, 30</a>
                </small>
                ) - від <StyledPrice>200</StyledPrice> грн.,
            </p>
            <p>
                <img alt="ригельні ключі" src={keys9} />
            </p>{" "}
            <p>
                - виготовлення <strong>помпових</strong> і <strong>тубулярних</strong> ключів -{" "}
                <StyledPrice>370</StyledPrice> грн. та <StyledPrice>300</StyledPrice> грн.,
            </p>
            <p>
                <img alt="помпові ключі" src={keys10} />
            </p>
            <p>
                - виготовлення <strong>трубчастих</strong> ключів - від{" "}
                <StyledPrice>650 </StyledPrice>грн.,
            </p>{" "}
            <p>
                <img alt="трубчасті ключі" src={keys11} />
            </p>
            <p>
                - програмування пультів для <strong>воріт і шлагбаума</strong> -{" "}
                <StyledPrice>400 </StyledPrice>грн.,
            </p>
            <p>
                <img alt="програмування пультів" src={keys12} />
            </p>
            <p>- та інших.</p>
            <p>Заточка ножів і м'ясорубок - 20 грн.</p>
            <p>
                Двосторонній сталевий брелок із захисними лінзами - <StyledPrice>100 </StyledPrice>
                грн.
                <img alt="брелок с номером авто" src={brelok} />
            </p>
            <StyledParagraphRed>Знижка!!!</StyledParagraphRed>
            <p>
                При виготовленні від 5 однакових або від 10 різних ключів - знижка{" "}
                <StyledPrice>10</StyledPrice> грн. <strong>на кожен ключ</strong>!
            </p>
        </StyledContainer>
    );
};
