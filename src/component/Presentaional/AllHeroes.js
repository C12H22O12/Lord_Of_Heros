import React from "react";
import LOGO from "../img/메인로고.png"
import "./css/AllHeroes.css"

function AllHeroes() {
    return (
        <div id="wholeFrame">
            <div id="seeAll">
                <div id="showHero">
                    <img src={LOGO}/>
                    <h1>영웅들 모아보기</h1>
                    <input id = "search" type="text" placeholder="영웅 이름을 입력하세요"/>
                    <input id = "searchBtn" type="image" value="검색"/>
                </div>
                <div id="heroList">
                    <h2>라이레이</h2>
                </div>
            </div>
        </div>
    );
}

export default AllHeroes;
