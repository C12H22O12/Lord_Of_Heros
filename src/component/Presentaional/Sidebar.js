import React from "react"
import "./css/Sidebar.css"

import Mu from "../img/icon/뮤.png"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={Mu}/>
            <ul className="barItem">
                <li className="Item"><a href="#info">기본 스텟</a></li>
                <li className="Item"><a href="#backgroundStory">백스토리</a></li>
                <li className="Item"><a href="#skill">스킬</a></li>
                <li className="Item"><a href="#talk">대사</a></li>
                <li className="Item"><a>코스튬</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;