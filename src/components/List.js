import React, {useState,useEffect } from 'react';

import Card from './Card';
import Data from './Data';
const listData = Array.from(
    // 오름차순
    Data.sort((a,b)=>{
        return a.num - b.num;
    })
)

export default function List(prop){
    return(<>
        {listData.map((con) =>(
            <Card  num={con.num} key={con.num}
                   imgSrc={con.imgSrc}
                   imgName={con.imgName}
                   title={con.title}
                   label={con.label}
                   href={con.href}
                   class={con.class}
                   btnName={con.btnName} 
                   divClass={prop.class}/>
        ))}
    </>)
}