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
                messageB_opacity_in:[0, 1, { start:0.3, end:0.4 }],
                messageC_opacity_in:[0, 1, { start:0.5, end:0.6 }],
                messageD_opacity_in:[0, 1, { start:0.7, end:0.8 }],

                messageA_translateY_in:[20, 0, { start:0.1, end:0.2 }],
                messageB_translateY_in:[20, 0, { start:0.3, end:0.4 }],
                messageC_translateY_in:[20, 0, { start:0.5, end:0.6 }],
                messageD_translateY_in:[20, 0, { start:0.7, end:0.8 }],

                messageA_opacity_out:[1, 0, { start:0.25, end:0.3 }],
                messageB_opacity_out:[1, 0, { start:0.45, end:0.5 }],
                messageC_opacity_out:[1, 0, { start:0.65, end:0.7 }],
                messageD_opacity_out:[1, 0, { start:0.85, end:0.9 }],

                messageA_translateY_out:[0, -20, { start:0.25, end:0.3 }], 
                messageB_translateY_out:[0, -20, { start:0.45, end:0.5 }],   
                messageC_translateY_out:[0, -20, { start:0.65, end:0.7 }],
                messageD_translateY_out:[0, -20, { start:0.85, end:0.9 }],
            }
        },
        {   //1
            type: 'normal',
            // heightNum: 5, 
            scrollHeight:0, 
            objs:{
                container: document.querySelector('#scroll-section-1'),
                bar: document.querySelector('#scroll-section-1 .line-bar')
            },
            values:{
                barHeight_in: [0, 97, {start:0.1, end:0.9} ],
                barHeight_out: [97, 0, {start:0.9, end:0.1} ],
            }
        },
        {   //2
            type: 'normal',
            // heightNum: 5, 
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
        console.log( 'curYOffset : ',curYOffset )
        console.log( 'scrollRatio : ',scrollRatio )
        
        if( currentScene === 0 ){
            document.querySelector('#scroll-section-0 .fix-text').style.opacity = 1;
            //변수 배열에 넣기
            const arr = [ 
                { 
                    num: 0.22, name: obj.messageA, 
                    type1: val.messageA_opacity_in, type2:val.messageA_translateY_in, 
                    type3: val.messageA_opacity_out, type4:val.messageA_translateY_out, 
                },
                { 
                    num: 0.42, name: obj.messageB, 
                    type1: val.messageB_opacity_in, type2:val.messageB_translateY_in, 
                    type3: val.messageB_opacity_out, type4:val.messageB_translateY_out, 
                },
                { 
                    num: 0.62, name: obj.messageC, 
                    type1: val.messageC_opacity_in, type2:val.messageC_translateY_in, 
                    type3: val.messageC_opacity_out, type4:val.messageC_translateY_out, 
                },
                { 
                    num: 0.82, name: obj.messageD, 
                    type1: val.messageD_opacity_in, type2:val.messageD_translateY_in, 
                    type3: val.messageD_opacity_out, type4:val.messageD_translateY_out, 
                },
            ];
            // 인터랙션
            for( let i =0;i<arr.length;i++ ){
                if(scrollRatio <= arr[i].num ){
                    arr[i].name.style.opacity = calcVal(arr[i].type1, curYOffset);
                    arr[i].name.style.transform = `translateY(${calcVal(arr[i].type2, curYOffset)}%)`;
                }else{
                    arr[i].name.style.opacity = calcVal(arr[i].type3, curYOffset);
                    arr[i].name.style.transform = `translateY(${calcVal(arr[i].type4, curYOffset)}%)`;
                }
            }

            if(scrollRatio > 0.84){
                document.querySelector('#scroll-section-0 .fix-text').style.opacity = calcVal( [1, 0, { start:0.85, end:0.9 }], curYOffset );
            }else{
                document.querySelector('#scroll-section-0 .fix-text').style.opacity = 1;
            }
        }
        if( currentScene !== 0 ){
            document.querySelector('#scroll-section-0 .fix-text').style.opacity = 0;
        }

        if( currentScene === 1 ){
            // if(scrollRatio > 0.1){
            //     obj.bar.style.height = `${calcVal(val.barHeight_in, curYOffset)}%`;
            // }else{
            //     obj.bar.style.height = `${calcVal(val.barHeight_out, curYOffset)}%`;
            // }
            
        }
        
        // switch( currentScene ){
        //     case 0:
        //         if(scrollRatio <= 0.22){
        //             obj.messageA.style.opacity = calcVal(val.messageA_opacity_in, curYOffset);
        //             obj.messageA.style.transform = `translateY(${calcVal(val.messageA_translateY_in, curYOffset)}%)`;
        //         }else{
        //             obj.messageA.style.opacity = calcVal(val.messageA_opacity_out, curYOffset);
        //             obj.messageA.style.transform = `translateY(${calcVal(val.messageA_translateY_out, curYOffset)}%)`;
        //         }

        //         if(scrollRatio <= 0.42){
        //             obj.messageB.style.opacity = calcVal(val.messageB_opacity_in, curYOffset);
        //             obj.messageB.style.transform = `translateY(${calcVal(val.messageB_translateY_in, curYOffset)}%)`;
        //         }else{
        //             obj.messageB.style.opacity = calcVal(val.messageB_opacity_out, curYOffset);
        //             obj.messageB.style.transform = `translateY(${calcVal(val.messageB_translateY_out, curYOffset)}%)`;
        //         }

        //         if(scrollRatio <= 0.62){
        //             obj.messageC.style.opacity = calcVal(val.messageC_opacity_in, curYOffset);
        //             obj.messageC.style.transform = `translateY(${calcVal(val.messageC_translateY_in, curYOffset)}%)`;
        //         }else{
        //             obj.messageC.style.opacity = calcVal(val.messageC_opacity_out, curYOffset);
        //             obj.messageC.style.transform = `translateY(${calcVal(val.messageC_translateY_out, curYOffset)}%)`;
        //         }

        //         if(scrollRatio <= 0.82){
        //             obj.messageD.style.opacity = calcVal(val.messageD_opacity_in, curYOffset);
        //             obj.messageD.style.transform = `translateY(${calcVal(val.messageD_translateY_in, curYOffset)}%)`;
        //         }else{
        //             obj.messageD.style.opacity = calcVal(val.messageD_opacity_out, curYOffset);
        //             obj.messageD.style.transform = `translateY(${calcVal(val.messageD_translateY_out, curYOffset)}%)`;


        //         }
        //         break;

        //     case 1:
        //         break;
        //     case 2:
        //         break;
        //     case 3:
        //         break;
        // }
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