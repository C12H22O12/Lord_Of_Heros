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

import "./css/AboutHero.css"
import AboutSkill1 from "./AboutSkill.js"
import AboutStat from "./AboutStat.js"
import Sidebar from "./Sidebar.js"

function AllHeroes() {
    const [isOpen_2, setIsOpen_2] = useState(false);
    const [isOpen_3, setIsOpen_3] = useState(false);
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

    const skill = [
        [
            "1스", "용염무", "버스트게이지 108 획득", " 선택한 적을 공격하고, 70% 확률로 1턴 간 대상의 [방어력]을 감소시킨다", isOpen_2
        ],
        [
            "2스", "옥염선", "버스트게이지 156 획득", " 선택한 적을 공격하고, 70% 확률로 1턴 간 대상의 [방어력]을 감소시킨다", isOpen_2
        ],
        [
            "3스", "열풍천도", "버스트게이지 108 획득", " 선택한 적을 공격하고, 70% 확률로 1턴 간 대상의 [방어력]을 감소시킨다", isOpen_2
        ],
        [
            "패시브", "용족의 위압감", "버스트게이지 108 획득", " 선택한 적을 공격하고, 70% 확률로 1턴 간 대상의 [방어력]을 감소시킨다"
        ],
        [
            "패시브", "무예의 달인", "버스트게이지 108 획득", " 선택한 적을 공격하고, 70% 확률로 1턴 간 대상의 [방어력]을 감소시킨다"
        ]
    ]

    const stat = [
        [
            11421,
            1059,
            782,
            "10%",
            "50%",
            "10%",
            "25%"
        ],
        [
            11992,
            1112,
            821,
            "15%",
            "55%",
            "20%",
            "30%"
        ],
        [
            10401,
            1114,
            1049,
            "20%",
            "30%",
            "35%",
            "25%"
        ]
    ];

    const skillList = () => {
        const skillRes = [];
        for (let i = 0; i < skill.length; i++) {
            if (i < 2) {
                skillRes.push(
                    <li
                        onClick={() => {
                            setIsOpen_2(!isOpen_2);
                        }}>
                        <img src={skill1} alt="skill1"/>
                        <i>{skill[i][0]}</i>
                        <h2>{skill[i][1]}</h2>
                        <i>{skill[i][2]}</i>
                        <p>{skill[i][3]}</p>
                    </li>
                );
            } else {
                skillRes.push(
                    <li>
                        <img src={skill1} alt="skill1"/>
                        <i>{skill[i][0]}</i>
                        <h2>{skill[i][1]}</h2>
                        <i>{skill[i][2]}</i>
                        <p>{skill[i][3]}</p>
                    </li>
                );
            }
        }
        return skillRes;
    }

    function handleChange(e) {
        let value = 0;

        if (e.target.value === "0to60"){
            value=0;
        } else if (e.target.value === "1to60"){
            value=1;
        } else{
            value=2;
        }

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
