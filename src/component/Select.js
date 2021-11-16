import React from "react";

function Select({filter}) {
    // console.log(filter)
    // const select = () => {
    //     let tmp = [];
    //     for (let i = 0; i < filter.length; i++) {
    //         tmp.push(<option value={filter[i]} key={i}>{filter[i]}</option>)
    //     }

    //     return (<select>
    //         {tmp}
    //     </select>)
    // }

    // return (<div>
    //     {select()}
    // </div>);

    return(
      <select>
        <option value="1">1</option>
        <option value="2">1</option>
        <option value="3">1</option>
        <option value="4">1</option>
        <option value="5">1</option>
      </select>
    )
}

export default Select;
