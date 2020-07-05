import React from 'react';
import ReactDOM from 'react-dom';

import List from './components/List';

export default function App(){
    return(<>
        <header>
            <div className="head">
                <h1 className="head-logo">
                    <img src="#"/>
                </h1>
            </div>
        </header>
        <main>
            <div className="bg-border row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
            </div>

            <h2>작업중...</h2>
            {/* <section className="visual">
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
                    <List />
                </div>
            </section> */}
        </main>
    </>)
}