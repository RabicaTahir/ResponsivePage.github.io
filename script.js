var Bar = document.getElementById('bar');
var Close = document.getElementById('close');
var nav = document.getElementById('navitems');

if(Bar){
    Bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}
if(Close){
    Close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}
