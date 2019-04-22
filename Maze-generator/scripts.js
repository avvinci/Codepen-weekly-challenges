let neighbours = 4 ;
let neighbourArray = [[0,-1], [0,1], [-1,0], [1,0]] ;  
let arr = [] ; 
let createButton = document.getElementById('createButton');  
createButton.onclick = createCustomMaze ; 

function createCustomMaze(){
    // hack for now
    window.location.reload(); 
    let height = 3  ; 
    let width = 3; 
    height *= 4 ; 
    width *= 4 ; 
    removeOldMaze(height); 

    createMaze(height,width) ; 
}

function removeOldMaze(height){
    arr = [] ; 
    for(let i=0;i<height;i++){
        // removeRow(i) ; 
    }
}

function removeRow(i){
    let cRow = document.getElementById('Row'+i) ; 
    document.body.removeChild(cRow) ; 
}

function createMaze(height , width){

    for(let i=0;i<height;i++){
        let temp =[] ; 
        let par  = createRow(i) ; 
    
        for(let j= 0 ;j < width ; j++ ){
            temp.push(0) ;
            createBlock(par,i,j) ;  
        }
        arr.push(temp) ; 
    }
   
    let freeCount = height*width ; 
    let st = []; 
    st.push({x:0,y:0}) ;
    let st_size = 1 ; 

    while(freeCount > 0 && st_size > 0  ){
        cell = st[st_size-1] ; 
        // console.log(cell) ; 

        if(arr[cell.x][cell.y] === 0 ) 
            freeCount-- ; 
        arr[cell.x][cell.y] = 1; 

        let ind = [] ; 
        for(let i =0;i < neighbours ;i++ ){
            let newcell = { x : cell.x + neighbourArray[i][0] , y: cell.y + neighbourArray[i][1] } ;
            // console.log('newcell', newcell,  inGrid(newcell) );
            if( inGrid(newcell.x , newcell.y,height,width) && (arr[newcell.x][newcell.y]  === 0)  ){
                ind.push(i) ; 
                // console.log('newcell', newcell , arr[newcell.x][newcell.y]);
            } 
        }

        if(ind.length == 0 ) {
            st_size--;
            continue ; 
        }
        let rind = Math.floor((Math.random() * ind.length )) ; 
        let nextcell =  {x : cell.x  + neighbourArray[ind[rind]][0] , y :cell.y + neighbourArray[ind[rind]][1] } ; 
        removeBorders(cell, nextcell,rind,ind) ; 

        if(st_size >= st.length)
            st.push(nextcell) ; 
        else
            st[st_size] = nextcell ;
        st_size++ ; 

    }

}


function inGrid(x,y ,height ,width){
    if(x >= 0 && y >= 0 && x < height && y < width) 
        return true; 
    return false ; 
}
function hasNeighbourVisited(x,y){
    for(let i =0 ; i< neighbours ;i++ ){
        let nx = x +neighbourArray[i] ; 
        let ny  = y + neighbourArray[i] ; 
        if( inGrid(nx,ny,height,width)  && arr[nx][ny] ===  1) return true ;   
    }
    return false; 
}

function createBlock(par,i,j){

    let elem  = document.createElement('div');
    elem.setAttribute('class', 'block wine');
    elem.setAttribute('id' , 'block' + i + ' ' +  j); 
    par.appendChild(elem);
}

function createRow(i){
    let par = document.createElement('div');
    par.setAttribute('class', 'container');
    par.setAttribute('id', 'Row' + i );
    // console.log(par); 
    document.body.appendChild(par);
    return par; 
}



function removeBorders(cell,nextcell ,rind,ind ){

        let cellId = 'block' + cell.x + ' ' +  cell.y ; 
        let curBlock = document.getElementById(cellId) ; 
        // console.log(curBlock) ; 
    
        let nextcellId = 'block' + nextcell.x + ' ' +  nextcell.y ; 
        let nextBlock = document.getElementById(nextcellId) ; 
        // console.log(nextBlock) ; 
    
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
}


window.onload = function(){
    let height = 3  ; 
    let width = 3; 
    height *= 4 ; 
    width *= 4 ; 
    createMaze(height,width) ; 
}