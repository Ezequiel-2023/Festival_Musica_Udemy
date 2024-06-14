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
        galeria.appendChild(imagen)    
    }
}

