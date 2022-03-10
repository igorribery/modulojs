const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);


let areas = {
    a: null,
    b: null,
    c: null
}

qsa('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});
qsa('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});
qs('.neutralArea').addEventListener('dragover', dragOverNeutral);
qs('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
qs('.neutralArea').addEventListener('drop', dropNeutral);

// Functions Item
function dragStart(e) {
    e.currentTarget.classList.add('dragging');

}
function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

// Functions Areas

function dragOver(e) {
    if(e.currentTarget.querySelector('.item') === null) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
    }
}
function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}
function drop(e) {
    e.currentTarget.classList.remove('hover');

    if(e.currentTarget.querySelector('.item') === null) {
        let dragItem = qs('.item.dragging');
        e.currentTarget.appendChild(dragItem);

        updateAreas();
    }
}

// functions neutral area

function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');

}
function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover');

}
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover');
    let dragItem = qs('.item.dragging');
    e.currentTarget.appendChild(dragItem);

    updateAreas();

}

// logic functions

function updateAreas() {
    qsa('.area').forEach(area => {
        let name = area.getAttribute('data-name');
        if(area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }
    });
    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
        qs('.areas').classList.add('correct');
    } else {
        qs('.areas').classList.remove('correct');
    }
}