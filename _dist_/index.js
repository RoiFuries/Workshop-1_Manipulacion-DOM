/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo"

// web API llamada fetch
// cosas que hacer:
// 1.- conectarnos al server
// si queremos mejorar esta cosa se puede usar asyn await en lugar de promesas
window
.fetch(url)
// 2.- Procesar la respuesta y convertirla en JSON
.then(respuesta => respuesta.json())
// 3.- cuando tengamos JSON tendremos data y esa info es la usamos pare renderizar la info en el browser
.then(responseJson => {
    const todosLosItems = [];
    responseJson.data.forEach(item => {
        // cuando estoy dentro del data.foreEach por cada uno de los items entonces voy a:
        //crear imagen
        const imagen = document.createElement('img');
        //crear titulo
        const titulo = document.createElement('h2');
        document.body.appendChild(titulo)
        // crear precio
        const price = document.createElement('div');
//aho un contenedor para esto
        const container  = document.createElement('div')
        container.append(imagen, titulo, price)

        // container.appendChild(imagen)
        // container.appendChild(titulo)
        // container.appendChild(price)
        todosLosItems.push(container)
    })
    document.body.append(...todosLosItems)

})