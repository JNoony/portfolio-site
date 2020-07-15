const data = [
    {   num:"01", 
        divClass:'type1',
        imgName:"모비커넥트", 
        imgSrc:"/images/box_img01.png",
        title:"mobiconnect",
        // label:<>
        // <span>#UI/UX 리뉴얼 디자인</span>
        // <span>#HTML5</span><span>#CSS3</span><span>#SASS/SCSS</span>
        // <span>#javascript</span><span>#jQuery</span><span>#JSTL</span>
        // </>,
        button:<a href="#" class="">Read more</a> 
    },
    {   num:"02", 
        divClass:'type1',
        imgName:"모비인터치", 
        imgSrc:"/images/box_img02.png",
        title:"mobintouch",
        // label:<>
        // <span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#ReactJS</span>
        // </>,
        href:"https://mobintouch.co.kr/",
        class:"btn-defalut",
        btnName:"Read more" 
    },
    {   num:"03", 
        divClass:'type1',
        imgName:"맥스더크리에이티브 2nd", 
        imgSrc:"/images/box_img03.png",
        title:"maxthecreative 2nd",
        label:
        <span>#HTML5</span><span>#CSS3</span><span>#javascript</span>
        <span>#Material-ui</span><span>#ReactJS</span>,
        href:"https://maxthecreative.co/",
        class:"btn-defalut",
        btnName:"Read more" 
    },
    {   num:"04", 
        divClass:'type1',
        imgName:"맥스서밋 2019", 
        imgSrc:"/images/box_img04.png",
        title:"maxsummit 2019",
        label:<span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#jQuery</span>,
        href:"https://maxsummit.co/2019/",
        class:"btn-defalut",
        btnName:"Read more" 
    },
    {   num:"05", 
        divClass:'type1',
        imgName:"브랜드사이트-열렙전사 사전예약", 
        imgSrc:"/images/box_img05.png",
        title:"브랜드 사이트",
        label: <span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#jQuery</span>,
        href:"",
        class:"btn-defalut",
        btnName:"Read more" 
    },
    {   num:"06",
        divClass:'type1', 
        imgName:"퍼틀 앱/웹", 
        imgSrc:"/images/box_img06.png",
        title:"fertile app/web",
        label:
        <span>#UI/UX 디자인</span>
        <span>#HTML5</span><span>#CSS3</span><span>#javascript</span><span>#jQuery</span>,
        href:"http://fertile.co.kr/",
        class:"btn-defalut",
        btnName:"Read more" },   
]

const List = ()=>{
  listData.map((con) =>(
    `<h3 class="list-num">${con.num}</h3>
    <div class="list-img">
        <img src="${con.imgSrc}" alt="${con.imgName}" />
    </div>
    <div class="list-text">
        <p class="list-text-tit">${con.title}</p>
        <p class="list-text-label">${con.label}</p>
        <p class="list-text-link">
            <a href="${con.href}" target="_blank">${con.btnName}</a>
        </p>
    </div>`
  ))
}

function init(){
  let div = document.createElement('div');
  div.classList.add('con-box-list');
  div.innerHTML = List();
  // div.innerHTML = `
  // <h3 class="list-num">{props.num}</h3>
  // <div class="list-img">
  //   <img src={props.imgSrc} alt={props.imgName} />
  // </div>
  // <div class="list-text">
  //   <p class="list-text-tit">{props.title}</p>
  //   <p class="list-text-label">{props.label}</p>
  //   <p class="list-text-link">
  //       {props.button}
  //   </p>
  // </div>`
  return div;
}

(()=>{
  const boxDOM = document.querySelector('#boxList');
  // boxDOM.appendChild(init());
  boxDOM.innerHTML = init();
})()

