
function id(el2) {
    return document.getElementById(el2);
}
window.onload = function () {
    id('mais2').onclick = function () {
        id('format2').value = parseInt(id('format2').value) + 1;

     
    }
    id('menos2').onclick = function () {
        if (id('format2').value > 0)
            id('format2').value = parseInt(id('format2').value) - 1;

        
    }
}


function id(el) {
    return document.getElementById(el);
}
window.onload = function () {
    id('mais').onclick = function () {
        id('format').value = parseInt(id('format').value) + 1;

     
    }
    id('menos').onclick = function () {
        if (id('format').value > 0)
            id('format').value = parseInt(id('format').value) - 1;

        
    }
}


// export default app