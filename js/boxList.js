const listData = [
    {   num:"01", 
        divClass:'type1',
        imgName:"모비커넥트", 
        imgSrc:"./images/box_img01.png",
        title:"mobiconnect",
        label:`<span>#UI/UX 리뉴얼 디자인</span>
        <span>#HTML5</span><span>#CSS3</span><span>#SASS/SCSS</span>
        <span>#javascript</span><span>#jQuery</span><span>#JSTL</span>`,
        href:"",
        class:"btn-defalut disable",
        btnName:"데모 준비중" 
    },
    {   num:"02", 
        divClass:'type1',
        imgName:"모비인터치", 
        imgSrc:"./images/box_img02.png",
        title:"mobintouch",
        label:`<span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#ReactJS</span>`,
        href:"https://mobintouch.co.kr/",
        class:"btn-defalut",
        btnName:"Read more" 
    },
    {   num:"03", 
        divClass:'type1',
        imgName:"맥스더크리에이티브 2nd", 
        imgSrc:"./images/box_img03.png",
        title:"maxthecreative 2nd",
        label:`<span>#HTML5</span><span>#CSS3</span><span>#javascript</span>
        <span>#Material-ui</span><span>#ReactJS</span>`,
        href:"https://maxthecreative.co/",
        class:"btn-defalut",
        btnName:"Read more" 
    },
    {   num:"04", 
        divClass:'type1',
        imgName:"맥스서밋 2020/2019", 
        imgSrc:"./images/box_img04.png",
        title:"maxsummit 2019",
        label:`<span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#jQuery</span>`,
        href:"https://maxsummit.co",
        class:"btn-defalut",
        btnName:"Read more" 
    },
    {   num:"05", 
        divClass:'type1',
        imgName:"브랜드사이트-열렙전사 사전예약", 
        imgSrc:"./images/box_img05.png",
        title:"브랜드 사이트",
        label:`<span>#HTML5</span><span>#CSS3</span><span>#javascript</span>
        <span>#jQuery</span>`,
        href:"",
        class:"btn-defalut disable",
        btnName:"데모 준비중" 
    },
    {   num:"06",
        divClass:'type1', 
        imgName:"퍼틀 앱/웹", 
        imgSrc:"./images/box_img06.png",
        title:"fertile app/web",
        label:`<span>#UI/UX 디자인</span><span>#HTML5</span><span>#CSS3</span>
        <span>#javascript</span><span>#jQuery</span>`,
        href:"http://fertile.co.kr/",
        class:"btn-defalut disable",
        btnName:"데모 준비중" 
    },   
]
// const data = JSON.stringify(listData)
// console.log(data)
// const labelStyle = (){

// }

// const removeComma = (srt)=>{
//     comma = parseInt(str.replace(/,/g,""));
//     return comma;
// }

const List = ()=>{ 
    let div = '';
    // div = listData.map((con) =>(  
    //    `<div class="con-box-list">
    //         <h3 class="list-num">${con.num}</h3>
    //         <div class="list-img">
    //             <img src="${con.imgSrc}" alt="${con.imgName}" />
    //         </div>
    //         <div class="list-text">
    //             <p class="list-text-tit">${con.title}</p>
    //             <p class="list-text-label">${con.label}</p>
    //             <p class="list-text-link">
    //                 <a href="${con.href}" target="_blank"
    //                 class="${con.class}">${con.btnName}</a>
    //             </p>
    //         </div>
    //    </div>`
    // ));
    for(var i=0;i<listData.length;i++){
        div += `<div class="con-box-list">
            <h3 class="list-num">${listData[i].num}</h3>
            <div class="list-img">
                <img src="${listData[i].imgSrc}" alt="${listData[i].imgName}" />
            </div>
            <div class="list-text">
                <p class="list-text-tit">${listData[i].title}</p>
                <p class="list-text-label">${listData[i].label}</p>
                <p class="list-text-link">
                    <a href="${listData[i].href}" target="_blank"
                    class="${listData[i].class}">${listData[i].btnName}</a>
                </p>
            </div>
        </div>`;
    }
    return div;
}

// function init(){
//     const boxDOM = document.querySelector('#boxList');
//     boxDOM.innerHTML = List();
// }

(()=>{

  const boxDOM = document.querySelector('#boxList');
  boxDOM.innerHTML = List();

})()

