const pageData = [
    {
        head:{
            class:"sub-head",
            title:'test1', 
            subTitle:'test1 내용입니답'
        },
    },
    {
        head:{
            class:"sub-head",
            title:'test2', 
            subTitle:'test2 내용입니답'
        },
    }
]

const pageHead = (i)=>{
    let div = '';
    div = `<div class="${pageData[i].head.class}">
                <h1>${pageData[i].head.title}</h1>
                <p>${pageData[i].head.subTitle}</p>
           </div>`;
    return div;
}


const pageContents = (num)=>{
    let div = '';
    div  = '<div class="sub-wrap">';
    div +=      pageHead(num);
    div += '</div>';
    
    return document.body.append( div )
}




// function TestObject() { 
//     this.one = "one"; 
//     this.two = "two"; 
//     this.three = "three"; 
// } 

// TestObject.prototype.init = function () { 
//     this.one = null; 
//     this.two = null; 
//     this.three = null; 
// } 
// var myObject = new TestObject(); 
// //객체생성 
// alert(myObject.one + " : " + myObject.two + " : " + myObject.three); 
// myObject.init(); 
// //객체 초기화 함수 호출 
// alert(myObject.one + " : " + myObject.two + " : " + myObject.three);
