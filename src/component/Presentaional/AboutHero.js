import React from "react";
import Hero from "../img/Heroes/LAIREI.png"
import Job from "../img/jobIcon/워리어.png"
import LOGO from "../img/메인로고.png"
import "./css/AboutHero.css"

function AllHeroes() {
    return (
        <div id="BackgroundFrame">
            <div id ="mainLogo">
                <img src={LOGO}/>
            </div>
            <div id="info">
                <div id="heroImg">
                    <img src={Hero}/>
                </div>
                <div id="heroInfo">
                    <div id="statSelect">
                        <select name="statSelect">
                            <option value="0to60">무각 60</option>
                            <option value="1to60">1각 60</option>
                            <option value="2to60">2각 60</option>
                        </select>
                    </div>
                    <p>용의 피에 부끄럽지 않은 영원한 충성을 바치겠어요.</p>
                    <h1>라이레이 옌</h1>
                    <div id="JobImg">
                        <img src={Job}/>
                    </div>
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
            <div id="about">
                <p id="backgroundStory">소수민족인 용인족의 지도자로, 페르사의 대족장을 보좌하는 참모 역할을 수행하고 있습니다. 정치적인 능력이 뛰어나고 꼼꼼해 실질적으로 페르사의 경영을 도맡고 있습니다. 평소에는 온화하고 침착한 성격이지만, 전투상황이 되면 용의 피가 깨어나며 광폭해지니 조심하시길, 대외적으로 "열풍의 공주"라고 불리나, 본인은 그 이명을 조금 부끄러워합니다.</p>
            </div>
        </div>
    );
}

export default AllHeroes;
