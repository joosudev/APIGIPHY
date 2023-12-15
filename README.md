# APIGIPHY
Esta función asincrónica extrae una imagen aleatoria de GIPHY y la presenta en el contenido visual de un documento HTML, brindando dinamismo a la interfaz

Definición de la función getImagen: Se declara una función llamada getImagen utilizando una sintaxis más compacta, utilizando una función asíncrona (async) y una expresión de función flecha (=>).

Solicitud a la API de Giphy: Se realiza una solicitud a la API de Giphy usando fetch. La URL incluye la clave de la API para obtener un GIF aleatorio.

Procesamiento de la respuesta: Se espera (await) la respuesta de la API y se convierte a formato JSON utilizando r.json(). Luego, se extrae la URL de la imagen original del objeto data obtenido.

Creación de un elemento <img>: Se crea dinámicamente un elemento de imagen en el documento HTML utilizando document.createElement('img').

Asignación de la URL a la imagen: La URL obtenida se asigna como la fuente (src) de la imagen recién creada.

Agregando la imagen al cuerpo del documento: La imagen se agrega como un hijo del elemento <body> del HTML utilizando document.body.append().

Llamada a la función getImagen(): Finalmente, la función getImagen se llama al final del código, lo que desencadena todo el proceso para obtener y mostrar la imagen de Giphy en el cuerpo del documento HTML.

## Video Referencia 
[APIGIPHY.webm](https://github.com/JDevWill/APIGIPHY/assets/47118243/de6c37e0-d594-4ced-839e-f73261d3b79e)
