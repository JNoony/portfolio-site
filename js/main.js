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
                // prevHeight: document.querySelector('#scroll-section-0').offsetHeight,
                // bar: document.querySelector('#scroll-section-1 .line-bar'),
            },
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
    }

    //페이지 상관없이 스크롤 높이로 애니메이션 실행하게 하기
    function listAni(){
        //2p
        let winY = yOffset;
        const mainPage = document.querySelector('#scroll-section-0').offsetHeight;
        const lineBar = document.querySelector('#scroll-section-1 .line-bar');
        const listHeight = document.querySelector('#boxList').offsetHeight;
        const start = mainPage - 760;
        const end = mainPage + listHeight;

        const listBox = document.querySelectorAll('#scroll-section-1 .con-box-list');
        const arr = [];
        const eleStyle = (ele,i,y,opa)=>{
            ele.style.transition = 'all 2s';
            ele.style.transition.delay = `${i+3}s`; 
            ele.style.transform = `translateY(${y})`;  
            ele.style.opacity = opa; 
        }
        
        for(var i=0;i<listBox.length;i++){
            arr.push( (listBox[i].getBoundingClientRect().top + winY) - mainPage );   

            if( (winY - start) < arr[i+1] ){
                listBox[i].childNodes[1].style.color = '#ddeaf6';
                eleStyle( listBox[i], i, 0, 1);
            }else if( (winY - start) >= arr[arr.length-1] ){
                //last list
                listBox[arr.length-1].childNodes[1].style.color = '#ddeaf6';
                eleStyle( listBox[arr.length-1], i, 0, 1 );
            }
            else{
                //reset
                listBox[i].childNodes[1].style.color = '#e9e9e9';
                eleStyle( listBox[i], i,'20%',0)
            }
        }

        if( winY >= start ){
            winY = winY - start;
            let percent = (winY*100)/(end-start);
            if( percent > 97 ) percent = 97; 

            lineBar.style.height = `${percent}%`;
            lineBar.style.boxShadow = `rgba(59, 183, 255,.5) 0px 0px 2px 0.01em`;
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
        playAnimation();
    }

    // //top
    // function topBtn(){
    //     const top = document.querySelector('html, body');
    //     const div = document.createElement('div');
    //     div.className = 'btn-top'; 
    //     div.innerHTML = `top`;
    //     // div.addEventListener('click', top.scrollTo({ top: 0, behavior: 'smooth' }) ); 
    //     return top.append(div);
    // }
    // topBtn();



    window.addEventListener('scroll',()=>{
        yOffset = window.pageYOffset;
        scrollLoop();
        listAni();
    })
    // window.addEventListener('DOMContentLoaded',setLayout) //html DOM만 보이면처리
    window.addEventListener('load',()=>{
        //loading
        const load = document.querySelector('.loading');
        load.style.display='none';

        setLayout();
    }) 
    window.addEventListener('resize',setLayout);
    
})();