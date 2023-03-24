let valorNombre = document.getElementById('valorNombre')
let valorTel = document.getElementById('valorTel')
let valorDni = document.getElementById('valorDni')
let enviar = document.getElementById('enviar')
let valorDesc = document.getElementById('valorDesc')
let listaAgenda = document.getElementById('listaAgenda')
let lista = document.getElementById('lista')
console.log(valorDesc)
console.log(valorNombre.value)

listaAgenda.style.display="none"

enviar.addEventListener('click',()=>{
    
    listaAgenda.style.display="block"
    let pNombre = document.createElement('p')
    let pDni = document.createElement('p')
    let ptel = document.createElement('p')
    let pcomentario = document.createElement('p')
    let li = document.createElement('li')
    pNombre.setAttribute('id','nombre')
    pDni.setAttribute('id','dni')
    ptel.setAttribute('id','tel;')
    pcomentario.setAttribute('id','comentario')
    li.appendChild(pNombre)
    li.appendChild(pDni)
    li.appendChild(ptel)
    li.appendChild(pcomentario)
    li.appendChild(addDeleteBtn())
    lista.appendChild(li)


    pNombre.innerHTML +="Nombre y apellido: "+valorNombre.value
    pDni.innerHTML +="Dni:"+valorDni.value
    ptel.innerHTML +="Tel:"+valorTel.value
    pcomentario.innerHTML +="Comentario:"+valorDesc.value
    valorNombre.value = ""
    valorTel.value = ""
    valorDni.value = ""
    valorDesc.value = ""
})
function addDeleteBtn(){
    const btnDelete = document.createElement('button')
    btnDelete.textContent = "x";
    btnDelete.className = "btn-delete"

    btnDelete.addEventListener('click',(e)=>{
        const item = e.target.parentElement;
        lista.removeChild(item)
        listaAgenda.style.display = "none"
        const items = document.querySelectorAll('li')
    })

    return btnDelete;

}



