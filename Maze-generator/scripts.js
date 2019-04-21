let height = 3  ; 
let width = 3; 

height *= 4 ; 
width *= 4 ; 

let neighbours = 4 ;
let neighbourArray = [[0,-1], [0,1], [-1,0], [1,0]] ;  
let arr = [] ; 

function inGrid(x,y){
    if(x >= 0 && y >= 0 && x < height && y < width) 
        return true; 
    return false ; 
}
function hasNeighbourVisited(x,y){
    // return true ; 
    for(let i =0 ; i< neighbours ;i++ ){
        let nx = x +neighbourArray[i] ; 
        let ny  = y + neighbourArray[i] ; 
        if( inGrid(nx,ny)  && arr[nx][ny] ===  1) return true ;   
    }
    return false; 
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
    // console.log(par); 
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
            // if(i ===  0 && j === 0 ) continue ; 
            if(arr[i][j] == 0 && hasNeighbourVisited(i,j)){
                cell.x = i ; 
                cell.y = j ; 
            }
        }
    }

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
            // console.log('newcell', newcell,  inGrid(newcell) );

            if( inGrid(newcell.x , newcell.y) && (arr[newcell.x][newcell.y]  === 0)){
                ind.push(i) ; 
                console.log('newcell', newcell , arr[newcell.x][newcell.y]);
            } 

        }

        // console.log(ind.length);
        if(ind.length == 0 ) break ; 

        let rind = Math.floor((Math.random() * ind.length )) ; 
        // console.log(rind);
        let nextcell =  {x : cell.x  + neighbourArray[ind[rind]][0] , y :cell.y + neighbourArray[ind[rind]][1] } ; 

        // console.log('nextcell',nextcell) ; 
        let cellId = 'block' + cell.x + ' ' +  cell.y ; 
        let curBlock = document.getElementById(cellId) ; 
        console.log(curBlock) ; 

        let nextcellId = 'block' + nextcell.x + ' ' +  nextcell.y ; 
        let nextBlock = document.getElementById(nextcellId) ; 
        console.log(nextBlock) ; 

        if(ind[rind] === 0 ){
            nextBlock.classList.add('no-wall-west');
            curBlock.classList.add('no-wall-east');
        }
        else if(ind[rind] === 1){
            nextBlock.classList.add('no-wall-east');
            curBlock.classList.add('no-wall-west');

        }
        else if(ind[rind] === 3 ){
            nextBlock.classList.add('no-wall-north');
            curBlock.classList.add('no-wall-south');

        }
        else{
            nextBlock.classList.add('no-wall-south');
            curBlock.classList.add('no-wall-north');

        }

    
        cell = nextcell ; 

    }
}
