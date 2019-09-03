import React from 'react';

import locationIcon from "../../assets/img/baseline_local_pizza_black_18dp-v1.png";
function InputSearch({animationClassName="",cStyle={},id="" ,backColor=""}){
    return(
        <input className={"form-control mr-sm-2 "+ animationClassName }
        id={id} 
              style={{...{
                background: "url('"+locationIcon+"') no-repeat scroll 7px 7px "+backColor,
paddingLeft:"36px"
              },...cStyle}}
              type="search" 
              placeholder="Enter delivery address" aria-label="Search"/>
    )
}


export default InputSearch;