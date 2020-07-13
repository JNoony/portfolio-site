import React from 'react';

export default function Headers(){
    return(
        <header>
            <div className="head">
                <h1 className="head-logo">
                    <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="로고이미지"/>
                </h1>
            </div>
        </header>
    )
}