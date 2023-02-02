import React from "react";
import { StyledContainer, StyledHeader } from "../pages.styled";
import photo1 from "../../assets/images/photo1.jpg";

export const Photos = () => {
    return (
        <StyledContainer>
            <StyledHeader>Фото на документи</StyledHeader>
            <p>
                <img alt="копія ключів" src={photo1} />
            </p>
            <p className="mt-20">
                Готові фото ви отримаєте вже через <strong className="fs32 color-red">5</strong>
                <strong>хвилин,</strong> включаючи <strong>ретуш обличчя</strong> (почервоніння,
                блиск, прищі і т.д.) і приведення зробленого знімка до потрібного формату
                фотографії.
            </p>
            <div className="table-container">
                <table className="table-border-red text-center" cellPadding="0" cellSpacing="0">
                    <tr className="bg-red">
                        <td>
                            <strong className="color-white">Знижка!!!</strong>
                        </td>
                    </tr>
                    <tr>
                        <td className="max-width-480">
                            Наступний комплект -{" "}
                            <strong className="fs32 color-red">
                                <em>60</em>
                            </strong>{" "}
                            <strong>грн</strong>. Електронний вигляд -{" "}
                            <strong className="fs32 color-red">
                                <em>100</em>
                            </strong>{" "}
                            <strong>грн</strong>.
                        </td>
                    </tr>
                </table>
            </div>
            <p>
                Зйомка відбувається із застосуванням професійної цифрової техніки CANON і студійного
                світла, а друк виконується на сертифікованому фотопапері.
            </p>

            <p>
                Види фотографій які ми робимо: паспорт України, закордонний паспорт, пенсійне
                посвідчення, водійські права, медкомісію, медичну книжку, на вступ до вузу, училище,
                коледж, учнівський та студентський квитки, ЗНО, картку киянина, пропуск, особова
                справа, візу в Україну для іноземців, американську візу, Green Card, шенгенську візу
                та інші візи. Ви також можете замовити <strong>фотографії на документи</strong>{" "}
                будь-якого <u>нестандартного розміру</u> або зробити{" "}
                <strong>термінове фото на документи</strong> <u>зі звичайної фотографії</u>.
            </p>
            <h2 className="color-red">Друк фотографій</h2>
            <div className="table-container">
                <table
                    className="table-border-ccc table-center text-center"
                    cellSpacing="0"
                    cellPadding="1"
                >
                    <tr>
                        <td className="max-width-200 bg-ccc min-width-80">Формат</td>
                        <td className="bg-ccc min-width-80">Глянець</td>
                        <td className="bg-ccc min-width-80">Мат</td>
                    </tr>
                    <tr>
                        <td className="border-ccc">10 x 15</td>
                        <td className="border-ccc color-red fs24">8</td>
                        <td className="border-ccc color-red fs24">10</td>
                    </tr>
                    <tr>
                        <td className="border-ccc">13 x 18</td>
                        <td className="border-ccc color-red fs24">12</td>
                        <td className="border-ccc color-red fs24">15</td>
                    </tr>
                    <tr>
                        <td className="border-ccc">15 x 21</td>
                        <td className="border-ccc color-red fs24">17</td>
                        <td className="border-ccc color-red fs24">20</td>
                    </tr>
                    <tr>
                        <td className="border-ccc">21 x 30</td>
                        <td className="border-ccc color-red fs24">22</td>
                        <td className="border-ccc color-red fs24">25</td>
                    </tr>
                    <tr>
                        <td className="border-ccc">30 x 40</td>
                        <td colSpan={2} className="border-ccc color-red fs24">
                            60
                        </td>
                    </tr>
                </table>
            </div>
            <div className="table-container flex">
                <table className="table-border-ccc text-center" cellPadding="0" cellSpacing="0">
                    <tr className="bg-ccc">
                        <td colSpan={3}>
                            <strong>Ламінація</strong>:
                        </td>
                    </tr>
                    <tr>
                        <td className="border-ccc">А5</td>
                        <td className="border-ccc">А4</td>
                    </tr>
                    <tr>
                        <td className="border-ccc">
                            <span className="color-red">20</span> <small>грн.</small>
                        </td>
                        <td className="border-ccc">
                            <span className="color-red">30</span> <small>грн.</small>
                        </td>
                    </tr>
                </table>
            </div>
            <p className="text-left">
                <strong>Ксерокс</strong> (ч-б) А4 – <span className="color-red">4</span>{" "}
                <small>грн.</small>
            </p>
            <p className="text-left">
                <strong>Друк А4</strong> (ч-б / колір) – <span className="color-red">4</span> /{" "}
                <span className="color-red">8</span> <small>грн.</small>
            </p>
            <p className="text-left">
                <strong>Сканування А4</strong> (ч-б / колір) – <span className="color-red">7</span>{" "}
                <small>грн.</small>
            </p>
        </StyledContainer>
    );
};
