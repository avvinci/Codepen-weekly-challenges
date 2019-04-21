let height = 4 ; 
let width = 4; 

height *= 4 ; 
width *= 4 ; 

let arr = [] ; 

function createBlock(par){

    let elem  = document.createElement('div');
    elem.setAttribute('class', 'block wine');
    par.appendChild(elem);
}

function createRow(){
    let par = document.createElement('div');
    par.setAttribute('class', 'container');
    console.log(par); 
    document.body.appendChild(par);
    return par; 
}


for(let i=0;i<height;i++){
    let temp =[] ; 
    let par  = createRow() ; 

    for(let j= 0 ;j < width ; j++ ){
        temp.push(0) ;
        createBlock(par) ;  
    }
    arr.push(temp) ; 
}

console.log(arr); 