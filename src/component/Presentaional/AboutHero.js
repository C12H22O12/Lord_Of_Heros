import React, {useState} from "react";
import Hero from "../img/Heroes/LAIREI.png"
import Job from "../img/jobIcon/워리어.png"
import LOGO from "../img/메인로고.png"
import type from "../img/typeIcon/불속성.png"
import skill1 from "../img/skillIcon/skill/용염무.png"
import skill2 from "../img/skillIcon/skill/옥염선.png"
import skill3 from "../img/skillIcon/skill/열풍천도.png"
import passive1 from "../img/skillIcon/passive/공격력 증가.png"
import passive2 from "../img/skillIcon/passive/풀속에 피해량 증가.png"
import hero_img from "../img/gif/라이레이 무각.gif"
import skill2_gif from "../img/gif/라이레이 2스.gif"
import "./css/AboutHero.css"

function AllHeroes() {
    const {isOpen, setIsOpen} = useState(false);

    return (
        <div id="BackgroundFrame">
            <div id="mainLogo">
                <img src={LOGO} alt="mainLogo"/>
            </div>
            <div id="info">
                <div id="heroImg">
                    <img src={Hero} alt="profile"/>
                </div>
                <div id="heroInfo">
                    <div id="statSelect">
                        <select name="statSelect">
                            <option value="0to60">무각 60</option>
                            <option value="1to60">1각 60</option>
                            <option value="2to60">2각 60</option>
                        </select>
                    </div>
                    <i>"용의 피에 부끄럽지 않은 영원한 충성을 바치겠어요."</i>
                    <div id="name">
                        <h1>라이레이 옌</h1>
                        <img src={type} alt="type"/>
                    </div>
                    <div id="JobImg">
                        <img src={Job} alt="aboutClass"/>
                    </div>
                    <p>1,2차 계약</p>
                    <p>★★★★★</p>
                    <table>
                        <thead>
                            <tr>
                                <th>계수명</th>
                                <th>계수</th>
                            </tr>
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
                <p id="backgroundStory">소수민족인 용인족의 지도자로, 페르사의 대족장을 보좌하는 참모 역할을 수행하고 있습니다. 정치적인
                    능력이 뛰어나고 꼼꼼해 실질적으로 페르사의 경영을 도맡고 있습니다. 평소에는 온화하고 침착한 성격이지만, 전투상황이 되면 용의 피가 깨어나며
                    광폭해지니 조심하시길, 대외적으로 "열풍의 공주"라고 불리나, 본인은 그 이명을 조금 부끄러워합니다.</p>
                <div id="skill">
                    <h1>스킬</h1>
                    <div class="aboutSkill">
                        <img src={skill2_gif} alt="skill2"/>
                        <table>
                            <thead>
                                <th>레벨</th>
                                <th>내용</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lv.2</td>
                                    <td>피해량 10%증가</td>
                                </tr>
                                <tr>
                                    <td>Lv.3</td>
                                    <td>약화 효과 발동 10%증가</td>
                                </tr>
                                <tr>
                                    <td>Lv.4</td>
                                    <td>피해량 10%증가</td>
                                </tr>
                                <tr>
                                    <td>Lv.2</td>
                                    <td>효과 지속 시간 1턴 증가</td>
                                </tr>
                                <tr>
                                    <td>Lv.6</td>
                                    <td>쿨타임 1턴 감소</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ul>
                        <li>
                            <img src={skill1} alt="skill1"/>
                            <i>1스</i>
                            <h2>용염무</h2>
                            <i>버스트게이지 108 획득</i>
                            <p>선택한 적을 공격하고, 70% 확률로 1턴 간 대상의 [방어력]을 감소시킨다</p>
                        </li>
                        <li>
                            <img src={skill2} alt="skill1"/>
                            <i>2스</i>
                            <h2>옥염선</h2>
                            <i>버스트게이지 156 획득</i>
                            <p>모든 적을 공격하고, 60% 확률로 1턴 간 대상의 [효과 저항]을 감소시킨다</p>
                        </li>
                        <li>
                            <img src={skill3} alt="skill1"/>
                            <i>3스</i>
                            <h2>열풍천도</h2>
                            <i>4소울 소모</i>
                            <p>모든 적을 공격하고, 80% 확률로 대상의 [행동 게이지]를 20% 감소시킨다</p>
                        </li>
                        <li>
                            <img src={passive1} alt="passive1"/>
                            <i>패시브</i>
                            <h2>용족의 위압감</h2>
                            <p>공격력이 증가한다</p>
                        </li>
                        <li>
                            <img src={passive2} alt="passive1"/>
                            <i>패시브</i>
                            <h2>무예의 달인</h2>
                            <p>대지 속성에게 주는 피해량이 증가한다</p>
                        </li>
                    </ul>
                </div>
                <h1>인게임 대사</h1>
                <div className="heroAct">
                    <h2>영입 시</h2>
                    <img src={hero_img} alt="meeting"/>
                    <p>"용의 피에 부끄럽지 않은 영원한 충성을 바치겠어요."</p>
                    <p>"라이레이 옌, 맹세합니다. 영원히 그대를 섬기겠어요."</p>
                </div>
            </div>
        </div>
    );
}

export default AllHeroes;
