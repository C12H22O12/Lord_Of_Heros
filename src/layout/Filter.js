import React from "react";
import Select from "../component/Select";

function Filter() {
    const type = ["fire", "water", "light", "dark", "grand"];
    return (
        <div>
            <Select list={type}/>
            <Select list={type}/>
            <Select list={type}/>
        </div>
    );
}

export default Filter;
