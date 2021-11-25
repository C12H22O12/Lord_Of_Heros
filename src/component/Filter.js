import React from "react";
import Select from "react-select"

const type=[
  {value:'fire', label:'불 속성'}, 
  {value:'water', label:'물 속성'}, 
  {value:'glass', label:'풀 속성'}, 
  {value:'light', label:'빛 속성'}, 
  {value:'darkness', label:'암 속성'}
]

function Filter({filter}) {
    return(
      <div>
        <select>
          <option>2</option>
          <option>2</option>
          <option>2</option>
          <option>2</option>
          <option>2</option>
        </select>
      </div>
    )
}


export default Filter;
