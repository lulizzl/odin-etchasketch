const container = document.querySelector('.container')

const button = document.createElement('button')
container.appendChild(button)
button.textContent = 'New Grid'

for (let i = 0; i < 256; i++) {
    var div = document.createElement('div')
    container.appendChild(div)
    div.classList.add('sqr')
}

function etchsketch (e) {
    if (e.target.tagName === 'DIV') {
        e.target.classList.add('hover')
        console.log('sketch')
    }   
}

function resetSize() {
    div.style.height = squareSize%
    div.removeAttribute('hover')
}

var canvas = document.querySelectorAll('.sqr')


function newGrid (e) {
    gridSize = prompt('Enter new grid size (max. 100)')
    if (gridSize > 100) gridSize = 100
    for (let i = 0; i < (gridSize*gridSize); i++) {
        var div = document.createElement('div')
        container.appendChild(div)
        div.classList.add('sqr')
    }
    squareSize = (1/gridSize)*100
    newCanvas = document.querySelectorAll('.sqr')
    newCanvas.forEach(element => element.setAttribute('style',`height: ${squareSize}%`))
}


function clearGrid() {
    canvas.forEach(element => element.remove())
}

function resetGrid() {
    clearGrid()
    newGrid()
    canvas = document.querySelectorAll('.sqr')
    console.log(canvas)
    canvas.forEach(square => square.addEventListener('mouseover',etchsketch))
}
    

canvas.forEach(square => square.addEventListener('mouseover',etchsketch))
button.addEventListener('click', resetGrid)

