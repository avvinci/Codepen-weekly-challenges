let height = 4 ; 
let width = 4; 

height *= 4 ; 
width *= 4 ; 

let arr = [] ; 


function createBlock(){
    let elem  = document.createElement('div');
    console.log('hi');
    // elem.className = "" ; 
    elem.setAttribute('class', 'block wine');
    document.body.appendChild(elem);
}

for(let i=0;i<height;i++){
    let temp =[] ; 
    for(let j= 0 ;j < width ; j++ ){
        temp.push(0) ;
        createBlock() ;  
    }
    var br = document.createElement("br");
    document.body.appendChild(br);
    document.body.appendChild(br);

    arr.push(temp) ; 
}

console.log(arr); 