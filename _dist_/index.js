/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/






const url = "https://platzi-avo.vercel.app"
// !!!! ojo esto de arriba despues se corrigio, otra solucion que implemente fue dejar la api completa  asi: const url = "https://platzi-avo.vercel.app/api/avo" 
// y puedes hacer otra constante con la url absoluta algo asi:  const urlAbsoluta = "https://platzi-avo.vercel.app" y cuando llames 
// a la imagen se hace un templete literal juntas la urlAbsoluta con el item del API. algo asi:
//  imagen.src = `${urlAbsoluta}${item.image}` o puedes poner no crear la constante de la url absoluta y meterla directo en el templete literal asi:
// imagen.src = `https://platzi-avo.vercel.app${item.image}` same shit


const appNode = document.querySelector('#app')  //aqui lo que estamos haciendo es que appNose apunte al elemento en el html que con el id app

appNode.addEventListener ('click', (event2) => {  ç//delegacion de eventos
    if(event2.target.nodeName === 'H2'){
        window.alert('sup2')

    }
}); 

// la api para internacionalizacion se encuentra en window.Int y ponemos que que vamos a usar monedas o fechas
const fotmarPricee = (price) => {

    const newprice = new window.Intl.NumberFormat('en-EN', {  //aqui  ponemos como primer parametro los locals osea el pais donde esta el usuario, para usar la notacion del lugar
        //por ejemplo podemos poner en
        style: 'currency', // como segundo parametro le pones que queremos que tengo un estio de moneda
        currency: 'USD' // y como monedad ponemos el la moneda que queremos usar ejemplo  GBP MSN YJP
    }).format(price)

    return newprice
}

//intl se usa para:
// 1.- formato a fechas
// 2./ formato a monedas




// web API llamada fetch
// cosas que hacer:
// 1.- conectarnos al server
// !!!! si queremos mejorar esta cosa se puede usar asyn await en lugar de promesas
window   // con esto nos conectamos al servicor window.fetch
.fetch(`${url}/api/avo`)
// 2.- Procesar la respuesta y convertirla en JSON
.then(respuesta => respuesta.json())
// 3.- cuando tengamos JSON tendremos data y esa info es la usamos pare renderizar la info en el browser
.then(responseJson => {
    const todosLosItems = [];
    responseJson.data.forEach(item => {
        // cuando estoy dentro del data.foreEach por cada uno de los items entonces voy a:
        //oara llamar imagen  siempre necesitas un src por eso ponemos imagen(que hace referenia a const imagen).src y le dices que le asigne lo que trae del API con 
        //item.image pero lo haces con un templete literal para qe los concatene ver arriba cuando grabamos la APi en constantes.
        const imagen = document.createElement('img');
        imagen.src = `${url}${item.image}`

        // para poner imagen, las imagenes siempre tienen el la propiedad src osea pondriamo imagen.src 

    //crear titulo
        const acctionExample = () => {
            window.alert('sup')
        }
        const titulo = document.createElement('h2');
        titulo.textContent = item.name         // aqui le dice que queremos que el título sea igual contenido en texto que tiene en el
        // item con el nombre name (el item hace referenca al item que pusimos en el forEach puedes poner cualquier cosa como tlacuache 
        //solo que cuando pidas cosas tendras que hacerlo con ese nombre osea tlacuache.name, name no cambia porque asi esta en el api )

        //Estilos
        // para dar estilos se pueden hacer varias formas asi:
        // como  cadena de texto >>>>  titulo.style = 'font-size: 2rem';
        // este es el otro metodo >>>>> titulo.style.fontSize = '3rem'; 
        // y creo que este es el mas prolijo usando clases con classNAme asi:
        titulo.className = 'NomeDeLaClase';
        // titulo.className = 'text-lg';
        // titulo.addEventListener("click", acctionExample)




    // crear precio
        const precio = document.createElement('div');
        // precio.textContent = item.price;  //precio quiero que el contenido que tu tienes como texto (.textContent) sea igual al item.price (el .price viene del api) 
        precio.textContent = fotmarPricee(item.price);
    
        //aho un contenedor para esto
        const container  = document.createElement('div')
        container.append(imagen, titulo, precio)

        //lo de arriba es lo mismo que aqui abajosolo que mas corto
        // container.appendChild(imagen)
        // container.appendChild(titulo)
        // container.appendChild(price)
        todosLosItems.push(container)
    })
    appNode.append(...todosLosItems)

})