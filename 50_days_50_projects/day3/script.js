const search=document.querySelector('.container')
const input=document.querySelector('.input')
search.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus();
})