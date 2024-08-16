const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app")
appNode.classList = 'mx-auto max-w-3xl bg-white p-4';


appNode.addEventListener('click', (event) => {
  if (event.target.nodeName === 'H2') {
    window.alert(`click en un: ${event.target.nodeName}`)
  }

})

// intl -> formato a fechas, monedas
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(price)

  return newPrice;
}

// web api
// conectarnos al server
// procesar la respuesta y conbertila en json
// Json -> Data -> Renderizar la info browser

window
  .fetch(`${baseUrl}/api/avo`)//procesar la respuesta y convertirla en json
  .then((respuesta) => respuesta.json())//Json => data ->conbertir en info browser
  .then((respuestajson) => {
    const todosLosItems = [];
    respuestajson.data.forEach((item) => {

      const container = document.createElement('div')
      const image = document.createElement('img')
      const title = document.createElement('h2')
      const price = document.createElement('span')
      const priceAndTitle = document.createElement('div')
      const card = document.createElement('div')

      image.src = `${baseUrl}${item.image}`
      image.classList= 'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'

      // Crear título
      title.classList = 'text-lg'
      title.textContent = item.name
     

      // create price
      price.classList = 'text-grey-600'
      price.textContent = formatPrice(item.price)
     

      // Creamos un contenedor el título y el precio
      priceAndTitle.classList = 'text-center md:text-left'
      priceAndTitle.appendChild(title)
      priceAndTitle.appendChild(price)

      // Metemos todo dentro de una tarjeta contenedora
      card.classList= 'md:flex flex-row bg-white rounded-lg p-6 hover:bg-gray-300'
      card.append(image, priceAndTitle)

      container.appendChild(card)


      todosLosItems.push(container);
    });

    appNode.append(...todosLosItems);

  })

