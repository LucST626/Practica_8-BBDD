function createText(){
    const data = document.querySelector("#user_text").value
    var element = document.createElement("p")
    console.log(element)
    element.innerHTML = data
    
    const contenedor = document.querySelector("#contenedor")
    contenedor.appendChild(element);
}
