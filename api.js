const getImagen = async() =>{
    const apiKey ='5duXGZopEkc8xiIiQP21p0mNOyNnYeZX';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json(); // es necesario siempre destrcuturar la data
    const {url} = data.images.original  // data.data.images.original codigo aternario si no se destructura la data
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
}

getImagen()
