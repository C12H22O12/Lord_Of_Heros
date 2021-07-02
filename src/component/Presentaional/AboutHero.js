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
                </div>
            </div>
        </div>
    );
}

export default AllHeroes;
