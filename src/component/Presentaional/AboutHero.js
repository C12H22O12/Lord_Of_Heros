import React, {useState} from "react";

import Hero from "../img/Heroes/LAIREI.png"
import Job from "../img/jobIcon/워리어.png"
import LOGO from "../img/메인로고.png"
import type from "../img/typeIcon/불속성.png"
import hero_img from "../img/gif/라이레이 무각.gif"

import "./css/AboutHero.css"
import AboutStat from "./AboutStat.js"
import Sidebar from "./Sidebar.js"
import {stat, skillList} from "../Container/AboutHeroFunc"

function AllHeroes() {
    const [statInfo, setStatInfo] = useState(
        [
            10401,
            1114,
            1049,
            "20%",
            "30%",
            "35%",
            "25%"
        ]);

    // selection에서 선택 시 스킬 계수가 변하도록 하는 함수
    function handleChange(e) {
        let value = 0;

        //각각 값을 판단
        if (e.target.value === "0to60"){
            value=0;
        } else if (e.target.value === "1to60"){
            value=1;
        } else{
            value=2;
        }

        //forEach를 이용하여 배열의 값을 차례대로 삽입
        stat.forEach(async (att) => {
          if(att === stat[value]){
            await setStatInfo(att)
          }
        })
      }

    return (
        <div id="BackgroundFrame">
            <Sidebar />
            <div id="mainLogo">
                <img src={LOGO} alt="mainLogo"/>
            </div>
            <div id="info">
                <div id="heroImg">
                    <img src={Hero} alt="profile"/>
                </div>
                <div id="heroInfo">
                    <div id="statSelect">
                        <select
                            name="statSelect"
                            onChange={(e) => {
                                handleChange(e);
                            }}>
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
                    <AboutStat
                        stat={statInfo}
                    />
                </div>
            </div>
            <div id="about">
                <p id="backgroundStory">소수민족인 용인족의 지도자로, 페르사의 대족장을 보좌하는 참모 역할을 수행하고 있습니다. 정치적인
                    능력이 뛰어나고 꼼꼼해 실질적으로 페르사의 경영을 도맡고 있습니다. 평소에는 온화하고 침착한 성격이지만, 전투상황이 되면 용의 피가 깨어나며
                    광폭해지니 조심하시길, 대외적으로 "열풍의 공주"라고 불리나, 본인은 그 이명을 조금 부끄러워합니다.</p>
                <div id="skill">
                    <h1>스킬</h1>
                    <p>각 스킬 별 상세 설명을 보고싶을 경우 스킬 아이콘을 클릭해보세요</p>
                    <ul>
                        {skillList()}
                    </ul>
                </div>
                <h1 id="talk">인게임 대사</h1>
                <div className="heroAct">
                    <img src={hero_img} alt="meeting"/>
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
