import React from "react";
import SubTitle from "../component/SubTitle";
import Heroes from "./Heroes";

function Nation({count}) {
    return (
        <div>
            <SubTitle cont1="아발론" cont2="Avalon"/>
            <Heroes count={count}/>
        </div>
    );
}

export default Nation;
