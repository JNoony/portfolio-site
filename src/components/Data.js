import React from "react";
import { Link } from "react-router-dom";

const data = [
    {   num:"01", 
        divClass:'type1',
        imgName:"모비커넥트", 
        imgSrc:"/img/box_img01.png",
        title:"mobiconnect",
        label:<>
        <span>#UI/UX 리뉴얼 디자인</span>
        <span>#HTML5</span><span>#CSS3</span><span>#SASS/SCSS</span>
        <span>#javascript</span><span>#jQuery</span><span>#JSTL</span>
        </>,
        button:<>
            <Link to={"/"} rel="noopener noreferrer">Read more</Link>
        </>
    },
    {   num:"02", 
        divClass:'type1',
        imgName:"모비인터치", 
        imgSrc:"/img/box_img02.png",
        title:"mobintouch",
        label:<>
        <span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#ReactJS</span>
        </>,
        href:"https://mobintouch.co.kr/",
        class:"btn-defalut",
        btnName:"Read more" 
    },
    {   num:"03", 
        divClass:'type1',
        imgName:"맥스더크리에이티브 2nd", 
        imgSrc:"/img/box_img03.png",
        title:"maxthecreative 2nd",
        label:<>
        <span>#HTML5</span><span>#CSS3</span><span>#javascript</span>
        <span>#Material-ui</span><span>#ReactJS</span>
        </>,
        href:"https://maxthecreative.co/",
        class:"btn-defalut",
        btnName:"Read more" 
    },
    {   num:"04", 
        divClass:'type1',
        imgName:"맥스서밋 2019", 
        imgSrc:"/img/box_img04.png",
        title:"maxsummit 2019",
        label:<>
        <span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#jQuery</span>
        </>,
        href:"https://maxsummit.co/2019/",
        class:"btn-defalut",
        btnName:"Read more" 
    },
    {   num:"05", 
        divClass:'type1',
        imgName:"브랜드사이트-열렙전사 사전예약", 
        imgSrc:"/img/box_img05.png",
        title:"브랜드 사이트",
        label:<>
        <span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#jQuery</span>
        </>,
        href:"",
        class:"btn-defalut",
        btnName:"Read more" 
    },
    {   num:"06",
        divClass:'type1', 
        imgName:"퍼틀 앱/웹", 
        imgSrc:"/img/box_img06.png",
        title:"fertile app/web",
        label:<>
        <span>#UI/UX 디자인</span>
        <span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#jQuery</span>
        </>,
        href:"http://fertile.co.kr/",
        class:"btn-defalut",
        btnName:"Read more" },
    




]
export default data;