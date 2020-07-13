import React,{useState,useEffect,useRef } from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header';
import List from '../components/List';

export default function Main(){
    const [height,setHeight] = useState(0);

    useEffect(() => {
        setHeight(document.querySelector('#scroll-section-0').offsetHeight)
    },[])

    const style = {
        height:height
    }
    return(<>
        <Header /> 
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

            <section className="visual scroll-section" id="scroll-section-0" style={style}>
                <h2 className="visual-txt">안녕하세요<br/>저는</h2>
                <div className="sticky-elem main-message a">
                    <strong>마크업 개발자<br/>markup developer</strong>
                </div>
                <div className="sticky-elem main-message b">
                    <strong>또는</strong>
                </div>
                <div className="sticky-elem main-message c">
                    <strong>웹 퍼블리셔<br/>web publisher</strong>
                </div>
                <div className="sticky-elem main-message d">
                    <strong>한민지 입니다.</strong>
                </div>
                <p className="visual-title">portfolio</p>
                <small>career description</small>
            </section>

            <section className="section-list scroll-section" id="scroll-section-1" >
                <h2 className="con-tit">work<br/>experience</h2>
                <div className="con-box row">
                    <List class={''}/>
                </div>
            </section>
        </main>
    </>)
}