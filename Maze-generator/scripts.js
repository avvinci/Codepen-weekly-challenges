let height = 3  ; 
let width = 3; 

height *= 4 ; 
width *= 4 ; 

let neighbours = 4 ;
let neighbourArray = [[0,-1], [0,1], [1,0], [-1,0]] ;  
let arr = [] ; 

function inGrid(p){
    if(p.x >= 0 && p.y >= 0 && p.x < height && p.y < width) 
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
        createBlock(par,i,j) ;  
    }
    arr.push(temp) ; 
}

let freeCount = height*width ; 

while(freeCount > 0 ){

    cell = {x:0,y:0} ; 
    for(let i = 0 ; i < height ; i++ ){
        for(j=0 ;j < width ;j++ ){
            if(arr[i][j] == 0){
                cell.x = i ; 
                cell.y = j ; 
            }
        }
    }
    let cellId = 'block' + cell.x + ' ' +  cell.y ; 
    console.log(document.getElementById(cellId)) ; 
    let curBlock = document.getElementById(cellId) ; 
    // curBlock.classList.add('no-wall-east');
    // DOMCurrentCell.classList.add('no-wall-east');
    let count = 0 ; 
    while(true){
        count++ ; 
        if(count > 100 ) break ;  
        console.log(cell) ; 
        arr[cell.x][cell.y] = 1; 
        freeCount-- ; 
        let ind = [] ; 
        for(let i =0;i < neighbours ;i++ ){

            let newcell = { x : cell.x + neighbourArray[i][0] , y: cell.y + neighbourArray[i][1] } ;
            console.log('newcell', newcell,  inGrid(newcell) );

            if( inGrid(newcell) && (arr[newcell.x][newcell.y]  === 0)){
                ind.push(i) ; 
                console.log('newcell', newcell , arr[newcell.x][newcell.y]);
            } 

        }

        console.log(ind.length);
        if(ind.length == 0 ) break ; 

        let rind = Math.floor((Math.random() * ind.length )) ; 
        console.log(rind);

        cell =  {x : cell.x  + neighbourArray[ind[rind]][0] , y :cell.y + neighbourArray[ind[rind]][1] } ; 
    }
}
