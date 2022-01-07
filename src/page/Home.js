import React from "react";
import Countries from "../component/Countries";
import Filter from "../layout/Filter";
import Title from "../component/Title";
import Nation from "../layout/Nation";

function Home() {
    return (
        <div id="wholeFrame">
            <div className="container">
                <div className="con_Header">
                    <Title cont={"영웅들 모아보기"}/>
                    <Countries />
                    <Filter />
                </div>
                <div className="con_Body">
                    <Nation count={7}/>
                    <Nation count={3}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
