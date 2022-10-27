/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = "https://platzi-avo.vercel.app";
// const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector("#app");

const formatPrice = precio =>{
    const newPrice = new window.Intl.NumberFormat('es-PE', {
        style: "currency",
        currency: "PEN",
    }).format(precio);
    return newPrice;
}
// //web api
// async function fetchData() {
//   const response = await fetch(url),
//   data = await response.json(),
//   allItems = [];

//   data.data.forEach((item) => {
//     // create image
//     const image = document.createElement("img");
//     // create title
//     const title = document.createElement("h2");
//     // create price
//     const price = document.createElement("div");

//     const container = document.createElement("div");
//     container.append(image, title, price);

//     allItems.push(container);
//   });

//   document.body.append(...allItems)
// }

// fetchData();


//web api
//conectarnos al server
// utilizando promise
window
// .fetch(`${baseUrl}/api/avo`)
.fetch(baseUrl + "/api/avo")
//procesar la respuesta y convertirla en json
.then((respuesta) =>respuesta.json())
//jason --> daTA -->CONVERTIRLA A JSON
.then(responseJson =>{
    const todosLosItems = [];
    responseJson.data.forEach(element => {
        // console.log(element)
        //crear imagen
        const imagen = document.createElement('img');
        imagen.src = baseUrl+element.image;
        imagen.className = "img-palta"
        // crear titulo
        const title = document.createElement('h2');
        title.textContent = element.name;
        title.className = "text-xl text-green-600";

        //crear precio
        const price = document.createElement('div');
        price.textContent = formatPrice(element.price);
        price.className = "text-price"

        const container = document.createElement("div");
        container.append(imagen,title,price);
        container.className = "container-palta";
        
        todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
})
