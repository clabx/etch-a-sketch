function makeGrid(size){
    let rows = [];
    for(let i=0; i<size; i++){
        rows[i] = document.createElement('div');
        rows[i].setAttribute('id', 'row');
        for(let j=0 ; j<size ; j++){
            const div = document.createElement('div');
            div.setAttribute('id', 'square');
            div.setAttribute('class', 'uncolored');
            rows[i].appendChild(div);

        }
        gridDOM.appendChild(rows[i]);
    }

    const squares = document.querySelectorAll('#square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
        square.removeAttribute('class');
        square.setAttribute('class', 'colored');
        })
    })
}

function removeGrid(){
    everyRowDOM = document.querySelectorAll('#row');
    everyRowDOM.forEach(row => {
        row.remove();
    })
    }


let gridSize = 16;
const gridDOM = document.querySelector('#grid');
const resizeDOM = document.querySelector('#prompter');
resizeDOM.addEventListener('click', () => {
    removeGrid();
    gridSize = prompt('What size you want the new canvas?');
    while(gridSize > 100 || gridSize < 1){
        gridSize = prompt('Invalid number. It has to be between 1 and 100.')
    }
    makeGrid(gridSize);
})

makeGrid(gridSize);



