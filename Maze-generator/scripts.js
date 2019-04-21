let height = 3  ; 
let width = 3; 

height *= 4 ; 
width *= 4 ; 

let neighbours = 4 ;
let neighbourArray = [[0,-1], [0,1], [1,0], [-1,0]] ;  
let arr = [] ; 
let available = new Set() ; 

function inGrid(p){
    if(p[0] >= 0 && p[1] >= 0 && p[0] < height && p[1] < width) 
        return true; 
    return false ; 
}

function createBlock(par,i,j){

    let elem  = document.createElement('div');
    elem.setAttribute('class', 'block wine');
    elem.setAttribute('id' , 'block' + i + ' ' +  j); 
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
        createBlock(par,i,j) ;  
    }
    arr.push(temp) ; 
}

// console.log(available);  

while(available.size > 0 ){

    const iterator1 = available[Symbol.iterator]();
    let cell = iterator1.next().value ; 
    let count = 0 ; 
    while(true){
        count++ ; 
        if(count > 100 ) break ;  
        console.log(cell) ; 
        console.log(available.has(cell)); 
        available.delete(cell) ; 
        let ind = [] ; 
        for(let i =0;i < neighbours ;i++ ){
            let newcell = [cell[0] + neighbourArray[i][0] , cell[1] + neighbourArray[i][1] ] ;
            console.log('newcell', newcell , available.has(cell));
            if( inGrid(newcell) && available.has(newcell)){
                ind.push(i) ; 
                // available.delete(newcell); 
            } 
        }
        console.log(ind.length);

        if(ind.length == 0 ) break ; 

        let rind = Math.random(ind.length) ; 
        cell =  [cell[0] + neighbourArray[rind][0] , cell[1] + neighbourArray[rind][1] ] ; 
    }
}

// console.log(available); 