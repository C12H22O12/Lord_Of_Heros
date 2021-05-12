import React from "react"
import styled from "styled-components"



function Heroes(params) {
    return (
        <div>
            <div id="defaultInfo">
                <span>
                    <div>영웅 사진 들어갈 곳</div>
                    <div>영웅 직업이랑 클래스</div>
                </span>
                <span>
                    스텟 들어갈 곳
                </span>
            </div>
            <div>무각 1각 2각</div>
            <div id="skillInfo">
                스킬 컴포넌트?를 주는 게 더 나을 듯
            </div>
            <div id="story">
                영웅 스토리
            </div>
            <div id="voice">
                이것도 컴포넌트? 한국/영어
            </div>
        </div>
    );
}

export default Heroes;