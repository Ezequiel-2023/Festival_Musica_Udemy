document.addEventListener('DOMContentLoaded', ()=>{
    createGaleria()
});

function createGaleria() {
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagen')
    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg` 
        imagen.alt = 'Imagen galeria'
        imagen.onclick = ()=>{
            mostrarImagen(i)
        }
        galeria.appendChild(imagen)    
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg` 
    imagen.alt = 'Imagen galeria'
    //generar modal 
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    //boton cerrar img
    const btnCerrar = document.createElement('BUTTON')
    btnCerrar.textContent = 'x'
    btnCerrar.classList.add('btn-cerrar')
    btnCerrar.onclick = cerrarModal
    modal.appendChild(imagen)
    modal.appendChild(btnCerrar)
    
    // agregar  el 
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    setTimeout(()=>{
        modal.remove()
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    },500);
}

