import React from "react";
import Countries from "../component/Countries";
import Title from "../layout/Title";

function Home() {
    const data = [
        "속성별",
        "불",
        "물",
        "대지",
        "빛",
        "암"
    ];
    return (
        <div id="wholeFrame">
            <div className="container">
                <div className="con_Header">
                    <Title cont={"영웅들 모아보기"}/>
                    <Countries />
                </div>
            </div>
        </div>
    );
}

export default Home;
