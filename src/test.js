'use strict';
window.onload = function () {
    let list = document.querySelector('ol');
    list.addEventListener("dblclick", function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

function addList() {
    let content = document.querySelector('[name=task]').value;

    if (content == undefined || content.trim().length == 0)
        return;

    let elem = document.createElement('li');
    elem.innerHTML = content;
    elem.style.fontSize = '12px';
    elem.style.fontStyle = 'italic';
    document.getElementsByTagName('ol')[0].append(elem);
    document.getElementById('taskContent').value='';
    document.getElementById('taskContent').onfocus;
}



