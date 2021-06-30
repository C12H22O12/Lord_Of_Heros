import React from "react";
import LOGO from "../img/메인로고.png"
import search from "../img/icon/search.png"
import "./css/AllHeroes.css"

function AllHeroes() {
    return (
        <div id="wholeFrame">
            <div id="seeAll">
                <div id="showHero">
                    <img src={LOGO}/>
                    <h1>기사들 모아보기</h1>
                    <p>찾고싶은 기사가 있다면?</p>
                    <div>
                        <input id="search" type="text" placeholder="영웅 이름을 입력하세요"/>
                        <input id="searchBtn" type="image" src={search}/>
                    </div>
                </div>
                <div id="heroList">
                    <h2>라이레이</h2>
                </div>
            </div>
        </div>
    );
}

export default AllHeroes;
