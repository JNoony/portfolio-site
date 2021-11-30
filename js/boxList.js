const listData = [
    {   num:"01", 
        divClass:'type1',
        imgName:"모비커넥트", 
        imgSrc:"./images/box_img01.png",
        title:"mobiconnect",
        label:`<span>#UI/UX 리뉴얼 디자인</span>
        <span>#HTML5</span><span>#CSS3</span><span>#SASS/SCSS</span>
        <span>#javascript</span><span>#jQuery</span><span>#JSTL</span>`,
        alert:'',
        button:[
            {   href:"javascript:void(0)",
                class:"btn-defalut disable",
                btnName:"데모 준비중" },
            {   href:"javascript:void(0)",
                class:"btn-defalut color-b disable",
                btnName:"Read more Code" }
        ]
    },
    {   num:"02", 
        divClass:'type1',
        imgName:"모비인터치", 
        imgSrc:"./images/box_img02.png",
        title:"mobintouch",
        label:`<span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#ReactJS</span>`,
        alert:'',
        button:[
            {   href:"https://mobintouch.co.kr/",
                class:"btn-defalut",
                btnName:"Site View" },
            {   href:"https://jnoony-portfolio-demopage.netlify.app/mobintouch",
                class:"btn-defalut",
                btnName:"DEMO" },
            {   href:"https://github.com/JNoony/portfolio/tree/master/mobintouch",
                class:"btn-defalut color-b",
                btnName:"Read more Code" },
        ]
    },
    {   num:"03", 
        divClass:'type1',
        imgName:"맥스더크리에이티브 2nd", 
        imgSrc:"./images/box_img03.png",
        title:"maxthecreative 2nd",
        label:`<span>#HTML5</span><span>#CSS3</span><span>#javascript</span>
        <span>#Material-ui</span><span>#ReactJS</span>`,
        alert:'',
        button:[
            {   href:"https://maxthecreative.co/",
                class:"btn-defalut",
                btnName:"Site View" },
            {   href:"https://github.com/JNoony/portfolio/tree/master/maxthecreative",
                class:"btn-defalut color-b",
                btnName:"Read more Code" },
        ]
    },
    {   num:"04", 
        divClass:'type1',
        imgName:"맥스서밋 2020/2019", 
        imgSrc:"./images/box_img04.png",
        title:"maxsummit 2019",
        label:`<span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#jQuery</span>`,
        alert:'',
        button:[
            {   href:"https://maxsummit.co",
                class:"btn-defalut ",
                btnName:"Site View" },
            {   href:"https://github.com/JNoony/portfolio/tree/master/maxsummit",
                class:"btn-defalut color-b",
                btnName:"Read more Code"},
        ]
    },
    {   num:"05", 
        divClass:'type1',
        imgName:"브랜드사이트-열렙전사 사전예약", 
        imgSrc:"./images/box_img05.png",
        title:"브랜드 사이트",
        label:`<span>#HTML5</span><span>#CSS3</span><span>#javascript</span>
        <span>#jQuery</span>`,
        alert:'',
        button:[
            {   href:"javascript:void(0)",
                class:"btn-defalut disable",
                btnName:"데모 준비중"   },
            {   href:"https://github.com/JNoony/portfolio/tree/master/game",
                class:"btn-defalut color-b",
                btnName:"Read more Code"   },
        ]
    },
    {   num:"06",
        divClass:'type1', 
        imgName:"퍼틀 앱/웹", 
        imgSrc:"./images/box_img06.png",
        title:"fertile app/web",
        label:`<span>#UI/UX 디자인</span><span>#HTML5</span><span>#CSS3</span>
        <span>#javascript</span><span>#jQuery</span>`,
        alert:'',
        button:[
            {   href:"javascript:void(0)",
                class:"btn-defalut disable",
                btnName:"데모 준비중" },
            {   href:"https://github.com/JNoony/portfolio/tree/master/webfertile",
                class:"btn-defalut color-b",
                btnName:"Read more Code" },
        ]
    },   
]

const List = ()=>{ 
    let div = '';
    listData.forEach( (con)=>{
        div += `<div class="con-box-list">
                    <h3 class="list-num">${con.num}</h3>
                    <div class="list-img">
                        <img src="${con.imgSrc}" alt="${con.imgName}" />
                    </div>
                    <div class="list-text">
                        <p class="list-text-tit">${con.title}</p>
                        <p class="list-text-label">${con.label}</p>
                        <p class="list-text-link">
                            ${con.button.map((con) =>{
                                return `<a href=${con.href} target="_blank" 
                                class=${con.class}>${con.btnName}</a>`
                            })}
                        </p>
                    </div>
                </div>`
    })

    return div;
}

// const List = ()=>{ 
//     let div = '';
//     for(var i=0;i<listData.length;i++){
//         const buttonContents = listData[i].button.forEach( (con,i) =>{
//             return `<a href=${con.href} target="_blank" key=${i} 
//                        class=${con.class}>${con.btnName}</a>`
//         });

//         div += `<div class="con-box-list">
//             <h3 class="list-num">${listData[i].num}</h3>
//             <div class="list-img">
//                 <img src="${listData[i].imgSrc}" alt="${listData[i].imgName}" />
//             </div>
//             <div class="list-text">
//                 <p class="list-text-tit">${listData[i].title}</p>
//                 <p class="list-text-label">${listData[i].label}</p>
//                 <p class="list-text-link">${buttonContents}</p>
//             </div>
//         </div>`;
//     }
//     return div;
// }

const clickHandle = (e)=>{
    let target = e.target;
    // target.addEventListener('click', pageContents( target.index ) )
    target.addEventListener('click', console.log( target ) )
}

// function init(){
//     const boxDOM = document.querySelector('#boxList');
//     boxDOM.innerHTML = List();
// }

(()=>{
    //list contents
    const boxDOM = document.querySelector('#boxList');
    boxDOM.innerHTML = List().replace(/,/g,"");

})()

