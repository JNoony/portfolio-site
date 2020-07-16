(() => {

    let yOffset = 0;  //스크롤 위치
    let prevScrollHeight = 0; //현재 yOffset 보다 이전에 위치산 스크롤 섹션들의 스크롤 높이값의 합
    let currentScene = 0; //현재 활성화된 씬
    let enterNewScene = false //새로운 씬이 시작되면 true

    const sceneInfo = [
        {   //0
            type: 'sticky',
            heightNum: 5, //브라우저 높이의 5배 scrollHeight 세팅
            scrollHeight:0, //각구간 스크롤 높이
            objs:{
                container: document.querySelector('#scroll-section-0'),
                messageA : document.querySelector('#scroll-section-0 .main-message.a'),
                messageB : document.querySelector('#scroll-section-0 .main-message.b'),
                messageC : document.querySelector('#scroll-section-0 .main-message.c'),
                messageD : document.querySelector('#scroll-section-0 .main-message.d'),
            },
            values:{
                messageA_opacity_in:[0, 1, { start:0.1, end:0.2 }],
                messageA_translateY_in:[20, 0, { start:0.1, end:0.2 }],
                messageA_opacity_out:[1, 0, { start:0.25, end:0.3 }],
                messageA_translateY_out:[0, -20, { start:0.25, end:0.3 }],

                messageB_opacity_in:[0, 1, { start:0.3, end:0.4 }],
            }
        },
        {   //1
            type: 'normal',
            heightNum: 5, 
            scrollHeight:0, 
            objs:{
                container: document.querySelector('#scroll-section-1')
            },
        },
        {   //2
            type: 'normal',
            heightNum: 5, 
            scrollHeight:0,
            objs:{
                container: document.querySelector('#scroll-section-2')
            },
        },
    ]

    function setLayout(){
        // 각 스크롤 섹션의 높이
        for(let i=0;i<sceneInfo.length;i++){
            if( sceneInfo[i].type === 'sticky' ){
                sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            }else if( sceneInfo[i].type === 'normal' ){
                sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
            }
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for( let i =0;i<sceneInfo.length;i++ ){
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if( totalScrollHeight >= yOffset ){
                currentScene = i;
                break;
            }
        }

        document.body.setAttribute('id',`show-scene-${currentScene}`)
    }

    //첫번째 페이지 애니메이션 수치 계산
    function calcVal(val, curYOff){
        let rv;
        //현재 씬에서 스크롤된 범위를 비율로 구하기
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = curYOff / scrollHeight;
        
        if(val.length === 3){
            //start ~ end 사이에 애니메이션 실행
            const partScrollStart = val[2].start * scrollHeight;
            const partScrollEnd = val[2].end * scrollHeight;
            const partScrollHeight = partScrollEnd - partScrollStart;

            if(curYOff >= partScrollStart && curYOff <= partScrollEnd){
                rv = (curYOff - partScrollStart) / partScrollHeight * (val[1] - val[0]) + val[0] ;
            }else if( curYOff < partScrollStart ){
                rv = val[0];
            }else if( curYOff > partScrollEnd ){
                rv = val[1];
            }
                    
        }else{
            rv = scrollRatio * (val[1] - val[0]) + val[0] ;
        }

        return rv;
    }

    function playAnimation(){
        const val = sceneInfo[currentScene].values;
        const obj = sceneInfo[currentScene].objs;
        const curYOffset = yOffset - prevScrollHeight;
        const scrollHeight = sceneInfo[currentScene].scrollHeight ;//현재 씬의 scrollHeight
        const scrollRatio = curYOffset / scrollHeight;
        // console.log( curYOffset )

        switch( currentScene ){
            case 0:
                if(scrollRatio <= 0.22){
                    obj.messageA.style.opacity = calcVal(val.messageA_opacity_in, curYOffset);
                    obj.messageA.style.transform =  `translateY(${calcVal(val.messageA_translateY_in, curYOffset)}%)`;
                }else{
                    obj.messageA.style.opacity = calcVal(val.messageA_opacity_out, curYOffset);
                    obj.messageA.style.transform =  `translateY(${calcVal(val.messageA_translateY_out, curYOffset)}%)`;
                }
                break;

            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }

    
    function scrollLoop(){
        enterNewScene = false;
        prevScrollHeight = 0;
        for( let i=0;i<currentScene;i++){
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }
        
        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            enterNewScene = true;
            currentScene++;
            document.body.setAttribute('id',`show-scene-${currentScene}`)
        }
        if(yOffset < prevScrollHeight ){
            enterNewScene = true;
            if( currentScene === 0 ) return; //top 바운스행위는 무시.
            currentScene--;
            document.body.setAttribute('id',`show-scene-${currentScene}`)
        }

        if( enterNewScene ) return;
        playAnimation()
        console.log( currentScene )
    }

    window.addEventListener('scroll',()=>{
        yOffset = window.pageYOffset;
        scrollLoop();
    })
    // window.addEventListener('DOMContentLoaded',setLayout) //html DOM만 보이면처리
    window.addEventListener('load',setLayout) 
    window.addEventListener('resize',setLayout);

})();