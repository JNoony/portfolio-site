import React from 'react';
import ReactDOM from 'react-dom';

import List from '../components/List';

export default function Main(){
    return(<>
         <header>
            <div className="head">
                <h1 className="head-logo">
                    <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="로고이미지"/>
                </h1>
            </div>
        </header>
        <main className="container">
            <div className="bg-border row">
                <div className="bg-border-back col-1"></div>
                <div className="bg-border-back col-2"></div>
                <div className="bg-border-back col-3"></div>
                <div className="bg-border-back col-3"></div>
                <div className="bg-border-back col-2"></div>
                <div className="bg-border-back col-1"></div>
                <div className="bg-border-text"></div>
            </div>

            <section className="visual">
                <h2 className="visual-txt">
                    <strong className="visual-txt-style">markup<br/>developer</strong>
                    <span className="visual-txt-style text">web<br/>publisher</span>
                </h2>
                <p className="visual-title">portfolio</p>
                <small>career description</small>
            </section>

            <section className="section-list">
                <h2 className="con-tit">work<br/>experience</h2>
                <div className="con-box row">
                    <List class={''}/>
                </div>
            </section>
        </main>
    </>)
}