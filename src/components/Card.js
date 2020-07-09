import React from 'react';

export default function Card(props){
    return(
        <div className={`con-box-list ${props.divClass}`} key={props.num}>
            <h3 className={`list-num `}>{props.num}</h3>
            <div className="list-img">
                <img src={props.imgSrc} alt={props.imgName} />
            </div>
            <div className="list-text">
                <p className="list-text-tit">{props.title}</p>
                <p className="list-text-label">{props.label}</p>
                <p className="list-text-link">
                    {props.button}
                    {/* <a href={props.href} className={props.class} target="_blank">
                        {props.btnName}
                    </a> */}
                 </p>
            </div>
        </div>
    )
}