document.addEventListener('DOMContentLoaded', () =>{
    const hamburguesa = document.querySelector('.hamburguesa');
    const menu = document.querySelector('.menu');
    const cerrar = document.querySelector('.cerrar');
    hamburguesa.addEventListener('touchstart', ()=>{
        menu.setAttribute('style', 'display:flex;');
    })
    cerrar.addEventListener('touchstart', () =>{
        menu.setAttribute('style', 'display:none;');
    })
})