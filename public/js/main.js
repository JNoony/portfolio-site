//자동호출 함수
(()=>{

    let yOffset = 0; //window.pageYOffset 대신 쓰는 변수
    let prevScrollHeight = 0; //현재 스크롤 위치보다 이전에 위치한 스크롤 섹션의 스크롤 높이
    let currentScene = 0; //현재 활성화된 씬

    const sceneInfo = [
        {   //0
            type:'sticky',
            hightNum:5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight:0,
            objs:{
                container: document.querySelector('#scroll-section-0'),
                messageA:document.querySelector('#scroll-section-0 .main-message.a'),
                messageB:document.querySelector('#scroll-section-0 .main-message.b'),
                messageC:document.querySelector('#scroll-section-0 .main-message.c'),
                messageD:document.querySelector('#scroll-section-0 .main-message.d'),
            }
        },
        {   //1
            type:'sticky',
            hightNum:5, 
            scrollHeight:0,
            objs:{
                container: document.querySelector('#scroll-section-1')
            }
        },
    ]
    
    function setLayout(){
        //각 스크롤 섹션의 높이 셋팅
        for(let i=0; i< sceneInfo.length;i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].hightNum * window.innerHeight;
            // sceneInfo[i].objs.container.height = `${sceneInfo[i].scrollHeight}px`;
        }

        console.log( document.querySelector('#scroll-section-0').height )
    }

    
    function scrollLoop(){
        prevScrollHeight=0;
        for(let i=0;i<currentScene;i++){
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }
        
        if( yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene++;
        }
        if( yOffset < prevScrollHeight ){
            currentScene--;
        }

        console.log( currentScene )
    }

    window.addEventListener('reasize',setLayout);
    window.addEventListener('scroll',()=>{
        yOffset = window.pageYOffset;
        scrollLoop()

        // console.log( yOffset )
    });
    
    setLayout()

})();