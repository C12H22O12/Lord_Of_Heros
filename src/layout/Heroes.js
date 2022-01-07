import React from "react";
import Hero from "../component/Hero";

function Heroes({count}) {

  const hero_list = ()=>{
    let list = [];

    // map vs list.push
    // 당장은 list.push 방법으로 하되 나중에 들어오는 데이터 고려해서 map으로 바꾸기
    
    for(let i = 0; i<count; i++){
      list.push(<Hero key={i} />)
    }
    return list
  }

  return (
    <div className="Heroes">
      {hero_list()}
    </div>
  );
}

export default Heroes;
