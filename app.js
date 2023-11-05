const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active' )
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active' )
    })
}

// searchbar
 const icon = document.querySelector('.icon');
 const search = document.querySelector('.search');
 const clear = document.getElementsByClassName('clear');

 
   if (icon) {
    icon.addEventListener('click', ()=>{
        search.classList.toggle('active');
    })
    }
   
    if(clear){
        clear.addEventListener('click', ()=>{
           document.getElementById("mysearch").value="";
        })
    }
    
    