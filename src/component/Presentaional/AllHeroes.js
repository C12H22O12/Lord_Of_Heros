import React from "react";
import "./css/AllHeroes.css"

function AllHeroes() {
    return (
        <div id="wholeFrame">
            <div id="seeAll">
                <div id="showHero">
                    <h1>영웅들 모아보기</h1>
                    <input type="text" placeholder="영웅 이름을 입력하세요"></input>
                    <input type="button" value="검색"/>
                </div>
                <div id="heroList">
                    <h2>라이레이</h2>
                </div>
            </div>
        </div>
    );
}

export default AllHeroes;
