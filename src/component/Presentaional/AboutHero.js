import React from "react";
import Hero from "../img/Heroes/LAIREI.png"
import "./css/AboutHero.css"

function AllHeroes() {
    return (
        <div id="BackgroundFrame">
            <div id="info">
                <div id="heroImg">
                    <img src={Hero}/>
                </div>
                <div id="heroInfo">
                    <p>용의 피에 부끄럽지 않은 영원한 충성을 바치겠어요.</p>
                    <h1>라이레이 옌</h1>
                    <div id="stat">
                        <div id="0to60">
                            <h2>무각 60</h2>
                            <table>
                                <thead>
                                    <th>계수명</th>
                                    <th>계수</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>체력</td>
                                        <td>13,134</td>
                                    </tr>
                                    <tr>
                                        <td>공격력</td>
                                        <td>1,217</td>
                                    </tr>
                                    <tr>
                                        <td>방어력</td>
                                        <td>899</td>
                                    </tr>
                                    <tr>
                                        <td>치명타 확률</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <td>치명타 피해</td>
                                        <td>60%</td>
                                    </tr>
                                    <tr>
                                        <td>효과 적중</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>효과 저항</td>
                                        <td>35%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id="1to60">
                            <h2>1각 60</h2>
                            <table>
                                <thead>
                                    <th>계수명</th>
                                    <th>계수</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>체력</td>
                                        <td>13,134</td>
                                    </tr>
                                    <tr>
                                        <td>공격력</td>
                                        <td>1,217</td>
                                    </tr>
                                    <tr>
                                        <td>방어력</td>
                                        <td>899</td>
                                    </tr>
                                    <tr>
                                        <td>치명타 확률</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <td>치명타 피해</td>
                                        <td>60%</td>
                                    </tr>
                                    <tr>
                                        <td>효과 적중</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>효과 저항</td>
                                        <td>35%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id="2to60">
                            <h2>2각 60</h2>
                            <table>
                                <thead>
                                    <th>계수명</th>
                                    <th>계수</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>체력</td>
                                        <td>13,134</td>
                                    </tr>
                                    <tr>
                                        <td>공격력</td>
                                        <td>1,217</td>
                                    </tr>
                                    <tr>
                                        <td>방어력</td>
                                        <td>899</td>
                                    </tr>
                                    <tr>
                                        <td>치명타 확률</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <td>치명타 피해</td>
                                        <td>60%</td>
                                    </tr>
                                    <tr>
                                        <td>효과 적중</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>효과 저항</td>
                                        <td>35%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllHeroes;
