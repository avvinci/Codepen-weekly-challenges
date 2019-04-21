let height = 5 ; 
let width = 5; 

height *= 4 ; 
width *= 4 ; 

let neighbours = 4 ;
let neighbourArray = [[0,-1], [0,1], [1,0], [-1,0]] ;  
let arr = [] ; 
let available = new Set() ; 

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
        available.add([i,j]) ; 
        createBlock(par) ;  
    }
    arr.push(temp) ; 
}

while(available.size > 0 ){

    const iterator1 = available[Symbol.iterator]();
    let cell = iterator1.next().value ; 
    console.log(cell) ; 
    available.delete(cell) ; 
    // for(let i =0;i < neighbours ;i++ ){
    //     let newcell = cell + neighbourArray[i];
    //     if(available.has(newcell)){
    //         available.delete(newcell); 
    //     } 

    // }
}
console.log(available); 