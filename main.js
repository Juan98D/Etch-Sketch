let cuadricula = document.querySelector('.cuadricula');
let medidas = document.querySelectorAll('.selector-item');
let cuadros = document.querySelectorAll('.cuadro');
let color = document.getElementById('color')

medidas[0].addEventListener('click', () => {
    cuadricula.innerHTML = ''
    console.log(medidas[0].getAttribute('value'))
    for(let i =0; i<256;i++){

        let div = document.createElement('div')
        div.className = 'cuadro';
    
        div.addEventListener('mouseover', () => {
            div.style.background = color.value
        })

        cuadricula.appendChild(div);
        div.style.width = '21px'
        div.style.height = '21px'
    }
})

medidas[1].addEventListener('click', () => {
    cuadricula.innerHTML = ''
    for(let i =0; i<1024;i++){

        let div = document.createElement('div')
        div.className = 'cuadro';
    
        div.addEventListener('mouseover', () => {
            div.style.background = color.value
        })

        cuadricula.appendChild(div);
        div.style.width = '10.8px'
        div.style.height = '10.8px'
    }
})

medidas[2].addEventListener('click', () => {
    cuadricula.innerHTML = ''
    for(let i =0; i<4096;i++){

        let div = document.createElement('div')
        div.className = 'cuadro';
        
        div.addEventListener('mouseover', () => {
            div.style.background = color.value
        })

        cuadricula.appendChild(div);
        div.style.width = '3.5px'
        div.style.height = '3.5px'
    }
})

