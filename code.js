const rst_btn = document.getElementById('reset');
rst_btn.addEventListener('click', reset);
/*for (let i=0; i<divArr1.length; i++){
    divArr1[i] = document.createElement('div');
    divArr1[i].classList.add('rows');
    document.getElementById('container').appendChild(divArr1[i]);
    for (let j=0; j< divArr2.length; j++){
        divArr2[j] = document.createElement('div');
        divArr2[j].classList.add('eas');
        divArr1[i].appendChild(divArr2[j]);
        divArr2[j].addEventListener('mouseenter', hovah)
    }
}*/
createGrid(4)



function createGrid(size) {
    let rows = new Array(size);
    let cells = new Array(size);
    for (let i=0; i<rows.length; i++){
        rows[i] = document.createElement('div');
        rows[i].classList.add('rows');
        document.getElementById('container').appendChild(rows[i]);
        for (let j=0; j< cells.length; j++){
            cells[j] = document.createElement('div');
            cells[j].classList.add('eas');
            rows[i].appendChild(cells[j]);
            cells[j].addEventListener('mouseenter', hovah)
        }
    }
}

function hovah() {
    this.style.backgroundColor = "black";
}

function reset() {
    let container = document.getElementById("container");
    let body = document.getElementsByTagName("body");
    body[0].removeChild(container);
    container = document.createElement('div');
    container.setAttribute('id', 'container');
    body[0].appendChild(container);
    let size = prompt('How many squares per side for the new grid?');
    if (parseInt(size) == NaN ){
        createGrid(parseInt(4));
    } else {
        createGrid(parseInt(size));
    }
}





